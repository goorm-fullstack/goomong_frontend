export interface Image {
  id: number;
  fileName: string;
  saveFileName: string;
  path: string;
}
export interface MessageProductProps {
  productName: string;
  money: number;
  nickName: string;
}
export interface Message {
  message: string;
  isYour: boolean;
  imageUrl?: string;
  product?: MessageProductProps;
}

export interface Files {
  id: number;
  fileName: string;
  saveFileName: string;
  path: string;
}

export interface PageInfoData {
  page: number;
  size: number;
  totalElements: number;
  totalPage: number;
}

export interface ReviewData {
  id: number;
  memberId: string;
  itemId: number;
  itemCategory: string;
  itemName: string;
  imageList: Image[];
  reportIdList: number[];
  commentNo: number;
  commentList: CommentData[];
  title: string;
  content: string;
  rate: number;
  likeNo: number;
  regDate: Date;
  delDate: Date;
  pageInfo: PageInfoData;
}

export interface CommentData {
  id: number;
  memberId: string;
  postId: number;
  postTitle: string;
  memberImageList: Image[];
  parentCommentId: number;
  content: string;
  likeNo: number;
  childrenComment: CommentData[];
  reportIdList: number[];
  regDate: Date;
  delDate: Date;
  pageInfo: PageInfoData;
}

export interface PostData {
  id: number;
  memberId: string;
  memberAddress: string;
  memberImageList: Image[];
  imageList: Image[];
  filesList: Files[];
  commentList: CommentData[];
  commentNo: number;
  reportIdList: number[];
  postCategoryId: number;
  postCategory: string;
  postType: string;
  postTitle: string;
  postContent: string;
  postViews: number;
  postLikeNo: number;
  regDate: Date;
  delDate: Date;
  pageInfo: PageInfoData;
}

export interface Item {
  id: number;
  title: string;
  member: any;
  price: number;
  description: string;
  itemOptions: Array<any>;
  thumbNailList: Array<any>;
  itemCategories: Array<any>;
  reviewList: Array<any>;
  askList: Array<any>;
  rate: number;
  status: string;
  regDate: Date;
}

export interface ItemData {
  data: Item;
  pageNum: number;
}

export interface CommunityCategoryData {
  id: number;
  image: Image;
  categoryGroup: string;
  categoryName: string;
  regDate: Date;
  delDate: Date;
  pageInfo: PageInfoData;
}

export interface QnaCategoryData {
  id: number;
  image: Image;
  categoryGroup: string;
  categoryName: string;
  regDate: Date;
  delDate: Date;
  pageInfo: PageInfoData;
}

export interface QuestionData {
  id: number;
  categoryName: string;
  children: AnswerData;
  title: string;
  content: string;
  regDate: Date;
  delDate: Date;
  pageInfo: PageInfoData;
}

export interface AnswerData {
  id: number;
  content: string;
  regDate: Date;
  delDate: Date;
  pageInfo: PageInfoData;
}

export interface LikeData {
  id: number;
  postId: number;
  commentId: number;
  reviewId: number;
}

export interface MemberData {
  memberId: string;
  memberPassword: string;
  memberName: string;
  memberEmail: string;
  likeList: LikeData[];
  memberSignupTime: Date;
}

export interface AskData {
  id: number;
  memberId: string;
  filesList: Files[];
  reportListId: number[];
  title: string;
  content: string;
  answerList: ResponseData[];
  regDate: Date;
  delDate: Date;
  pageInfo: PageInfoData;
}

export interface ResponseData {
  id: number;
  memberId: string;
  filesList: Files;
  title: string;
  content: string;
  regDate: Date;
  delDate: Date;
  pageInfo: PageInfoData;
}

export interface Point {
  totalPoint: number;
  expiringPoint: number;
}

export interface PointHistory {
  type: string;
  amount: number;
  description: string;
  orderNumber: string;
  regDate: Date;
}

export interface ReviewStatisData {
  allReviewAvg: number;
  allReviewCnt: number;
  customerSatisfaction: number;
  allOrderCnt: number;
  allOrderPriceSum: number;
}

export interface ItemCategoryData {
  id: number;
  title: string;
  level: number;
  priority: number;
  parent: ItemCategoryData;
  childCategory: ItemCategoryData[];
}
export interface Top5Ranking {
  memberId: number;
  memberName: string;
  imagePath: string;
  imageUrl?: string; // 추가된 필드
  count: string;
  category: string;
}

export interface RankingsState {
  ordered: Top5Ranking[];
  review: Top5Ranking[];
  sales: Top5Ranking[];
}

export interface FindMember {
  memberId: number;
  memberName: string;
  imagePath: string;
  saleSido: string;
  transaction: number;
  totalSales: number;
  reviewCount: number;
  totalRating: number;
}

export interface SellerData {
  id: number;
  memberId: string;
  description: string;
  income: number;
  rate: number;
  saleZipCode: number;
  saleSido: string;
  saleSimpleAddress: string;
  saleDetailAddress: string;
  imagePath: string;
  transactionCnt: number;
  reviewCnt: number;
  regDate: Date;
  pageInfo: PageInfoData;
}

export interface CurrentSearch {
  searchId: number;
  keyword: string;
}

export interface PopularSearch {
  keyword: string;
}
