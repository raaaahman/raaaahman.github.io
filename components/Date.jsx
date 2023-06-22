import { parseISO, format, isDate } from 'date-fns'

export default function Date({ dateString }) {
  return isDate(dateString) 
    ? <time className="text-sm italic" dateTime={dateString}>{format(parseISO(dateString), 'LLLL d, yyyy')}</time>
    : <small className="text-sm italic">{dateString}</small>
}