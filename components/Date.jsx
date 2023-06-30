import { parseISO, format, isDate } from 'date-fns'

export default function DateDisplay({ dateString }) {
  const datetime = Date.parse(dateString)
  return isNaN(datetime) 
    ? <small className="text-sm italic">{dateString}</small>
    : <time className="text-sm italic" dateTime={dateString}>{format(parseISO(dateString), 'LLLL d, yyyy')}</time>
}