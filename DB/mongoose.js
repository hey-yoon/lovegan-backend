import connect from "../connect/connect.js";
import Product from '../models/product_schema.js';

connect();


await Product.create(
    { title: "아보카도", description: "유기농 아보카도 3개입", price: 8700 },
    { title: "바나나", description: "유기농 바나나 5개입", price: 9990 },
    { title: "딸기", description: "유기농 딸기 2개입", price: 7630 },
    { title: "사과", description: "유기농 사과 4개입", price: 5720 },
    { title: "배", description: "유기농 배 1개입", price: 6380 },
    { title: "토마토", description: "유기농 토마토 3개입", price: 8820 },
    { title: "당근", description: "유기농 당근 2개입", price: 9200 },
    { title: "브로콜리", description: "유기농 브로콜리 1개입", price: 7690 },
    { title: "상추", description: "유기농 상추 3개입", price: 8730 },
    { title: "시금치", description: "유기농 시금치 2개입", price: 9850 },
    { title: "마늘", description: "유기농 마늘 4개입", price: 6470 },
    { title: "양파", description: "유기농 양파 1개입", price: 9730 },
    { title: "감자", description: "유기농 감자 2개입", price: 5630 },
    { title: "고구마", description: "유기농 고구마 5개입", price: 8670 },
    { title: "레몬", description: "유기농 레몬 4개입", price: 7990 },
    { title: "오렌지", description: "유기농 오렌지 3개입", price: 6900 },
    { title: "포도", description: "유기농 포도 1개입", price: 6750 },
    { title: "복숭아", description: "유기농 복숭아 4개입", price: 7810 },
    { title: "파인애플", description: "유기농 파인애플 2개입", price: 8830 },
    { title: "체리", description: "유기농 체리 5개입", price: 9620 },
    { title: "아보카도", description: "유기농 아보카도 1개입", price: 8760 },
    { title: "바나나", description: "유기농 바나나 2개입", price: 9830 },
    { title: "딸기", description: "유기농 딸기 4개입", price: 6510 },
    { title: "사과", description: "유기농 사과 3개입", price: 8920 },
    { title: "배", description: "유기농 배 5개입", price: 7510 },
    { title: "토마토", description: "유기농 토마토 2개입", price: 9110 },
    { title: "당근", description: "유기농 당근 3개입", price: 7290 },
    { title: "브로콜리", description: "유기농 브로콜리 4개입", price: 8470 },
    { title: "상추", description: "유기농 상추 2개입", price: 6320 },
    { title: "시금치", description: "유기농 시금치 1개입", price: 9270 },
    { title: "마늘", description: "유기농 마늘 5개입", price: 8450 },
    { title: "양파", description: "유기농 양파 3개입", price: 9920 },
    { title: "감자", description: "유기농 감자 5개입", price: 8120 },
    { title: "고구마", description: "유기농 고구마 4개입", price: 5770 },
    { title: "레몬", description: "유기농 레몬 3개입", price: 8910 },
    { title: "오렌지", description: "유기농 오렌지 2개입", price: 9150 },
    { title: "포도", description: "유기농 포도 4개입", price: 6710 },
    { title: "복숭아", description: "유기농 복숭아 2개입", price: 7920 },
    { title: "파인애플", description: "유기농 파인애플 3개입", price: 8960 },
    { title: "체리", description: "유기농 체리 4개입", price: 9150 }



)