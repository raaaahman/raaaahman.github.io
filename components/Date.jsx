import { parseISO, format } from 'date-fns'

export default function DateDisplay({ dateString, ...props }) {
  const datetime = Date.parse(dateString)
  return isNaN(datetime) 
    ? <small className="text-sm italic" {...props}>{dateString}</small>
    : <time className="text-sm italic" dateTime={dateString} {...props}>{format(parseISO(dateString), 'LLLL d, yyyy')}</time>
}