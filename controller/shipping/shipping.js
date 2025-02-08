import { useSelector } from "react-redux";
import Shipping from "../../models/shipping_schema.js";
import User from "../../models/user_schema.js";

const registerShipping = async (req, res) => {
    // console.log(req.body.data);

    try {
        const { email, name, phoneNumber, zonecode, addressLine1, addressLine2, isDefaultShipping } = req.body.data;

        // 필수 값이 빠지지 않도록 검증
        if (!email || !name || !phoneNumber || !zonecode || !addressLine1) {
            return res.status(400).json({
                registerSuccess: false,
                message: "필수 입력값이 누락되었습니다. 모든 필드를 입력해주세요.",
            });
        }

        // 이메일을 기반으로 사용자 정보 조회
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                registerSuccess: false,
                message: "해당 이메일에 해당하는 사용자를 찾을 수 없습니다.",
            });
        }

        // 새로운 배송지 객체 생성
        const newShipping = new Shipping({
            userRef: user._id,  // userRef에 사용자 ID를 할당
            recipientName: name,
            phoneNumber,
            zonecode,
            addressLine1,
            addressLine2,
            isDefaultShipping,
        });

        // console.log(newShipping);

        // 배송지 저장
        await newShipping.save();

        // 성공 응답
        return res.status(201).json({
            registerSuccess: true,
            message: "배송지가 성공적으로 등록되었습니다.",
        });

    } catch (error) {
        console.error("배송지 등록 중 오류 발생:", error);
        // 오류 응답
        return res.status(500).json({
            registerSuccess: false,
            message: "배송지 등록 중 오류가 발생했습니다. 다시 시도해 주세요.",
        });
    }
};

const listShipping = async (req, res) => {
    // console.log("listShipping: " + req.body);
    const { email } = req.body; // 쿼리 스트링에서 이메일을 받음

    if (!email) {
        return res.status(400).json({ success: false, message: "이메일이 제공되지 않았습니다." });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "해당 이메일에 해당하는 사용자를 찾을 수 없습니다.",
        });
    }

    try {
        // 이메일을 기준으로 배송지 목록 조회
        // console.log(user._id);
        const shippingAddresses = await Shipping.find({ userRef: user._id });
        // console.log(shippingAddresses); // 결과 확인
        console.log(shippingAddresses.length)

        if (shippingAddresses.length === 0) {
            return res.status(201).json({
                success: true,
                message: '배송지가 없습니다.',
                shippingAddresses: [],
            });
        }

        return res.status(200).json({
            success: true,
            shippingAddresses, // MongoDB에서 반환된 배송지 목록
        });
    } catch (error) {
        console.error('Error fetching shipping list:', error);
        return res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
};



export { registerShipping, listShipping };