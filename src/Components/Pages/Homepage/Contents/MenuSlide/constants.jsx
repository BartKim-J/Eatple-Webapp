import ImgMenu1 from './Images/menu1.jpg';
import ImgMenu2 from './Images/menu2.jpg';
import ImgMenu3 from './Images/menu3.jpg';
import ImgMenu4 from './Images/menu4.jpg';
import ImgMenu5 from './Images/menu5.jpg';
import ImgMenu6 from './Images/menu6.jpg';
import ImgMenu7 from './Images/menu7.jpg';
import ImgMenu8 from './Images/menu8.jpg';
import ImgMenu9 from './Images/menu9.jpg';
import ImgMenu10 from './Images/menu10.jpg';
import ImgMenu11 from './Images/menu11.jpg';
import ImgMenu12 from './Images/menu12.jpg';
import ImgMenu13 from './Images/menu13.jpg';

function toLatlng(x, y) {
  return { x, y };
}

export const partnersInfo = [
  {
    storeName: '고레카레',
    storeAddress: '사임당로 175 101호',
    menuName: '부타돈',
    mainImage: ImgMenu1,
    subImage: ImgMenu1,
    latlng: toLatlng(37.49294, 127.02866),
  },
  {
    storeName: '나주가',
    storeAddress: '역삼동 827-47',
    menuName: '곰탕',
    mainImage: ImgMenu2,
    subImage: ImgMenu2,
    latlng: toLatlng(37.49708, 127.03149),
  },
  {
    storeName: '노리테이블',
    storeAddress: '테헤란로 142',
    menuName: '치킨 가라아게 덮밥',
    mainImage: ImgMenu3,
    subImage: ImgMenu3,
    latlng: toLatlng(37.49968, 127.03492),
  },
  {
    storeName: '더샵샐러드',
    storeAddress: '역삼동 826-37 쌍용플레티넘벨류',
    menuName: '닭가슴살 샐러드',
    mainImage: ImgMenu4,
    subImage: ImgMenu4,
    latlng: toLatlng(37.4954, 127.03041),
  },
  { 
    storeName: '바니커피',
    storeAddress: '역삼동 826-37 쌍용플레티넘벨류',
    menuName: '와플&커피',
    mainImage: ImgMenu5,
    subImage: ImgMenu5,
    latlng: toLatlng(37.4954, 127.03041),
  },
  {
    storeName: '봉된장',
    storeAddress: '테헤란로 10길 25',
    menuName: '시래기 비빔밥',
    mainImage: ImgMenu6,
    subImage: ImgMenu6,
    latlng: toLatlng(37.49755, 127.03296),
  },
  {
    storeName: '심플한식',
    storeAddress: '서울 강남구 대치동 936-11',
    menuName: '제육도시락',
    mainImage: ImgMenu7,
    subImage: ImgMenu7,
    latlng: toLatlng(37.49775, 127.0534),
  },
  {
    storeName: '양대창',
    storeAddress: '서초구 서초대로 78길 52',
    menuName: '대창덮밥',
    mainImage: ImgMenu8,
    subImage: ImgMenu8,
    latlng: toLatlng(37.49318, 127.02868),
  },
  {
    storeName: '와플엘리',
    storeAddress: '서울특별시 강남구 테헤란로4길 46',
    menuName: '와플 2개와 커피',
    mainImage: ImgMenu9,
    subImage: ImgMenu9,
    latlng: toLatlng(37.49533, 127.03037),
  },
  {
    storeName: '유부남',
    storeAddress: '역삼동 826-37 쌍용플레티넘벨류',
    menuName: '유부남 초밥2p+샐러드',
    mainImage: ImgMenu10,
    subImage: ImgMenu10,
    latlng: toLatlng(37.4954, 127.03041),
  },
  {
    storeName: '질할브로스',
    storeAddress: '테헤란로 151(역삼동)',
    menuName: '치킨오버라이스',
    mainImage: ImgMenu11,
    subImage: ImgMenu11,
    latlng: toLatlng(37.50094, 127.03612),
  },
  {
    storeName: '청담돈까스',
    storeAddress: '역삼동 826-37 쌍용플레티넘벨류',
    menuName: '치킨마요덮밥',
    mainImage: ImgMenu12,
    subImage: ImgMenu12,
    latlng: toLatlng(37.4954, 127.03041),
  },
  {
    storeName: '한돈애',
    storeAddress: '서초구 서초동 1327-29 서초파라곤',
    menuName: '제육덮밥',
    mainImage: ImgMenu13,
    subImage: ImgMenu13,
    latlng: toLatlng(37.49492, 127.02739),
  },
];

export default { partnersInfo };
