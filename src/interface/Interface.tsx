export interface Image {
  id: number;
  fileName: string;
  saveFileName: string;
  path: string;
}

export interface ReviewData {
  id: number;
  memberId: string;
  itemId: number;
  itemCategory: string;
  itemName: string;
  imageList: Image[];
  reportIdList: number[];
  title: string;
  content: string;
  rate: number;
  likeNo: number;
  regDate: Date;
  delDate: Date;
}
