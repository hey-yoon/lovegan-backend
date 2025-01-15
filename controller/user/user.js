import User from "../../models/user_schema.js";
import path from 'path'
import bcrypt, { hash } from 'bcrypt';

const loginUser = async (req, res) => {
    // console.log(req.body)
    const findUser = await User.findOne({email : req.body.email}).lean()

    if(!findUser){
        return res.status(401).json({
            loginSuccess : false,
            message : "존재하지 않는 아이디 또는 비밀번호입니다."
        })
    }else{
        // 비밀번호 검증
        const passwordMatch = req.body.password === findUser.password;
        if(!passwordMatch){
            return res.status(401).json({
                loginSuccess : false,
                message : "존재하지 않는 아이디 또는 비밀번호입니다."
            })
        }
        // 민감한 정보를 제거
        const { password, ...user} = findUser;
        //console.log(user)
        return res.status(200).json({
            user,
            loginSuccess : true,
            message : "로그인이 완료되었습니다"
        })
    }
}
const registerUser = async (req, res) => {
    // console.log(req.body)
    const { nickname, email, password, phone } = req.body;
    const findUser = await User.findOne({email : email}).lean();

    if(findUser){
        return res.status(409).json({
            registerSuccess : false,
            message : "이미 존재하는 이메일입니다."
        })
    }else{
        let register = {
            email : email,
            password : password,
            phone : phone,
            nickname : nickname
        }
        await User.create(register);
        return res.status(201).json({
            registerSuccess : true,
            message : "축하합니다. 회원가입이 완료되었습니다."
        })
        // 비밀번호 해시화
        // const saltRounds = 10; // 해시 강도를 설정(높을 수록 안전);
        // const plainPassword = req.body.password
        // console.log("현재 비밀번호", plainPassword);

        // bcrypt.hash(plainPassword, saltRounds, async (err, hashPassword) => {
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log("해쉬 비밀번호", hashPassword);
        //         let registerUser = {
        //             email : email,
        //             password : hashPassword,
        //             name : name,
        //             phone : phone
        //         }

        //         await User.create(registerUser);
        //         return res.status(201).json({
        //             message : "Congratulations! Your registration is complete",
        //             registerSuccess : true
        //         })
        //     }
        // })
    }
}
const updateUser = async (req, res) => {
    //req.body.email
    const findUser = await User.findOne({email : req.body.email })
    const updatedUser = await User.updateOne(findUser,{
        // email : req.body.email,
        // name : req.body.name
    })
}
const deleteUser = async (req, res) => {
    const user = await User.findOne({email : req.body.email});
    const DeletedUser = await User.deleteOne(user);
}

const updatePicture = async (req, res) => {
    const uploadFolder = "uploads/profiles";
    const relativePath = path.join(uploadFolder, req.file.filename).replace(/\\/g, '/');
    const email = req.body.email;

    const currentUser = await User.findOne({email : email})
    const updatedUser = await User.updateOne(
        currentUser,
        {picture : `/${relativePath}`})

    console.log(req.body)
    res.status(200).json({
        message : "Updated",
        filePath : `/${relativePath}`,
    })
}

const updatePassword = async (req, res) => { 
    try {
        // 사용자 찾기
        const { email, currentPassword, newPassword } = req.body;
        
        const findUser = await User.findOne({ email: email });
        
        if (!findUser) {
            return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
        }

        // ✅ 현재 비밀번호 일치 여부 확인
        if (findUser.password !== currentPassword) {
            return res.status(401).json({ message: "현재 비밀번호가 일치하지 않습니다." });
        }

        // 비밀번호 업데이트 (updateOne 수정)
        await User.updateOne(
            { email: req.body.email },  // 검색 조건 수정
            { $set: { password: req.body.newPassword } } // $set 사용
        );

        res.status(200).json({ message: "비밀번호 변경 성공" });
    } catch (error) {
        console.error("비밀번호 변경 중 오류:", error);
        res.status(500).json({ message: "서버 오류" });
    }
}



export {loginUser, registerUser, updateUser, deleteUser, updatePicture, updatePassword }