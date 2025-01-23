import Other from '../../models/other_schema.js'

const getOther = async (req, res) => {
     const {categories, tag, clickSort} = req.query;
     console.log(clickSort);
     let sortName = "like"
     let sortValue = -1;
     if (clickSort) {
          if(clickSort==="like"){
               sortName = "star";
               sortValue = -1;
          }
          else if(clickSort==="lowCost"){
               sortName = "price";
               sortValue = 1;
          }
          else if(clickSort==="highCost"){
               sortName = "price";
               sortValue = -1;
          }
          else if(clickSort === "review"){
               sortName = "review";
               sortValue = -1
          }
          else{
               sortName = "review";
               sortValue = -1
          }
     }
     try {
          // 조건 객체를 동적으로 생성
          const filter = {};
          if (categories) filter.categories = categories; 
          if (tag) filter.tag = tag;
         
  
          // 조건에 맞는 데이터 검색
          const otherLists = await Other.find(filter).sort({[sortName] : sortValue});
          res.json(otherLists); // 결과 반환
      } catch (error) {
          console.error("상품 데이터를 가져오는 중 오류 발생:", error);
          res.status(500).json({ error: '서버 오류' }); // 서버 오류 응답
      }
};
const postOther = async (req, res) => {
     const {id} = req.query;
     console.log(id)

     try{
          const OtherDetail = await Other.findById(id);
          res.json(OtherDetail);

     }catch(error){
          console.error("상품 데이터를 가져오는 중 오류 발생:", error);
          res.status(500).json({ error: '서버 오류' }); // 서버 오류 응답
     }
   
};


export {getOther, postOther}