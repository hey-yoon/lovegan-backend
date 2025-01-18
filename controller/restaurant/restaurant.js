import Restaurant from "../../models/restaurant_schema.js";

const getRestaurant = async(req,res) => {
    try{
        const restaurantList = await Restaurant.find();
        console.log(restaurantList);

        res.json(restaurantList);
    }
    catch(error){
        res.status(500).json({error : '서버 오류'});
    }
};

export {getRestaurant};