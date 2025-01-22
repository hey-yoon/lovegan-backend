import Diary from '../../models/diary_schema.js';

const registerFood = async (req, res) => {
    const {time, foodName, kcal, tan, dan, gi, id, date} = req.body;
    console.log("단백질",dan)
    console.log("지방",gi)
    let register = {
        time : time,
        foodName : foodName,
        kcal : kcal,
        tan : tan,
        dan : dan,
        gi : gi,
        id : id,
        date : date
    }
    await Diary.create(register)
    return res.status(201).json({
        message : "음식 입력 성공!"
    })
}

const showFood = async (req, res) => {
    console.log("req", req.query)
    const userId = req.query.id;
    const { year, month, day } = req.query;
    try {
        const findUser = await Diary.find({ 
            id : userId, 
        }); 
        console.log("조회 결과:", findUser);
        return res.status(200).json(findUser);
    } catch (error) {
        console.error("DB 조회 오류:", error);
        return res.status(500).json({ error: "조회 중 오류 발생" });
    }
}
const deleteFood = async(req, res) => {
    const foodId = req.query.id;

    try {
        const result = await Diary.findByIdAndDelete(foodId);
        if (result) {
            res.status(200).json({ message: "삭제 성공", result });
        } else {
            res.status(404).json({ message: "존재하지 않음" });
        }
    } catch (error) {
        res.status(500).json({error: "삭제 중 오류 발생"});
    }
}

export {registerFood, showFood, deleteFood}