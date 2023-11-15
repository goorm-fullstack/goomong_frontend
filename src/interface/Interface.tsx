export interface Image {
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
  content: string;
  likeNo: number;
  childrenComment: CommentData[];
  reportIdList: number[];
  regDate: Date;
  delDate: Date;
  pageInfo: PageInfoData;
}