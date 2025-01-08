import Faq from "../../models/faq_schema.js";
import Notice from "../../models/notice_schema.js";

const notice = async (req, res) => {
    try {
        // 추가 후 데이터 조회
        const noticeList = await Notice.find();
        
        res.json(noticeList);
    } catch (error) {
        res.status(500).json({ error: "데이터베이스 오류" });
    }
};

const faq = async (req,res) => {
    try {
        const faqList = await Faq.find();

        res.json(faqList);
    }
    catch(error){
        res.status(500).json({error: "데이터베이스 오류"});
    }
};

export {notice, faq};
