import moment from 'moment';
import Instance from '../API/axiosInstance';

// 날짜 포멧팅 => 2023/11/15로 바꿔줌
export const formattingDate = (date: Date) => {
  const formatDate = moment(date, 'YYYY, MM, DD, HH, mm, ss, SSS').format('yyyy/MM/DD');
  return formatDate;
};

// 방금 전, 몇분 전, 몇시간 전, 몇일 전, 몇주 전, 몇개월 전, 몇년 전으로 바꿔줌
export const detailDate = (a: Date) => {
  const inputDate = moment(a, 'YYYY, MM, DD, HH, mm, ss, SSS').toDate();
  const milliSeconds = new Date().getTime() - inputDate.getTime();
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
};

// 서버에 저장된 이미지 가져오기
export const getImageFile = async (path: string) => {
  try {
    const response = await Instance.get('/api/image', {
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      responseType: 'blob',
      params: {
        imagePath: path,
      },
    });

    if (response.status === 200) {
      return URL.createObjectURL(response.data) as string;
    }
  } catch (error) {
    console.error(error);
  }
};
