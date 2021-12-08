import dateFormat from 'dateformat';

export enum DateFormat {
  Short = 'mmm yyyy',
  Medium = 'd mmm, yyyy',
  Long = 'mmmm dS, yyyy'
}

export const formatDate = (
  date: string | number | Date,
  format = DateFormat.Medium
) => {
  return dateFormat(date, format);
};
