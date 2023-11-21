export interface Image {
  id: number;
  fileName: string;
  saveFileName: string;
  path: string;
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
  memberImageList: Image[];
  parentId: number;
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
