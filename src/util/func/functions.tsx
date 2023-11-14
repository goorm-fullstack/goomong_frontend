import moment from 'moment';

export const formattingDate = (date: Date) => {
  const formatDate = moment(date, 'YYYY, MM, DD, HH, mm, ss, SSS').format('yyyy/MM/DD');
  return formatDate;
};
