import Faq from "../../models/faq_schema.js";
import Notice from "../../models/notice_schema.js";
import Quest from "../../models/quest_schema.js";
import { getCurrentTime } from "../../utils/utils.js";

// notice데이터 조회
const notice = async (req, res) => {
    try {
        // 추가 후 데이터 조회
        const noticeList = await Notice.find();
        
        res.json(noticeList);
    } catch (error) {
        res.status(500).json({ error: "데이터베이스 오류" });
    }
};

// faq데이터 조회
const faq = async (req,res) => {
    try {
        const faqList = await Faq.find();

        res.json(faqList);
    }
    catch(error){
        res.status(500).json({error: "데이터베이스 오류"});
    }
};

// quest데이터 조회
const quest = async (req, res) => {
    try{
        const questList = await Quest.find();

        res.json(questList);
    }
    catch(error){
        res.status(500).json({error: "데이터베이스 오류"})
    }
}

// form 데이터 생성하기
const formQuest = async (req, res) => {
    try{
        const {title,contents} = req.body;
        
        // 가장 최신의 no 값을 찾기
        const latestQuest = await Quest.findOne().sort({ no: -1 }).exec(); // no를 기준으로 내림차순 정렬 후 첫 번째 문서 찾기
        const newNo = latestQuest ? latestQuest.no + 1 : 1; // 최신 no가 없으면 기본값 1로 설정

        let newForm = {
            no: newNo,
            title: title,
            writer: "홍길동",
            date: getCurrentTime(),
            contents: contents,
        }
        
        await Quest.create(newForm);
        return res.status(201).json({
            message: "등록이 완료되었습니다.",
            registerSuccess: true
        })
        
    }
    catch(error){
        res.status(500).json({error: "데이터베이스 오류"})
    }
}

// quest 수정
const updateQuest = (req, res) => {
    // try{
    //     const {title,contents,no} = req.body;
    //     const update= await Quest.updateOne({ no: Number(no) },
    //     { $set: { title, contents } });
    //     res.status(200).json({message:"수정완료"});
        
    // }
    // catch(error){
    //     res.status(500).json({error: "데이터베이스 오류"})
    // }
}

// 삭제 로직
const deleteQuest = async(req, res) => {
    try{
        const {no} = req.body;
        await Quest.deleteOne({no});
        res.status(200).json({message:"삭제성공"});
    }
    catch(error){
        res.status(500).json({error: "데이터베이스 오류"})
    }
}

export {notice, faq, quest, formQuest, updateQuest, deleteQuest};
