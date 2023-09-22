import { useMemo } from 'react'
import Image from 'next/image'
import { CalendarIcon } from '@heroicons/react/24/solid'

import DateDisplay from './Date'

export default function Timeline({ steps, className, headings = 'h3', ...props }) {
  const TimelineStepHeading = useMemo(() => {
    return {
      h2: ({ ...props }) => (<h2 {...props}></h2>),
      h3: ({ ...props }) => (<h3 {...props}></h3>),
      h4: ({ ...props }) => (<h4 {...props}></h4>),
      h5: ({ ...props }) => (<h5 {...props}></h5>),
      h6: ({ ...props }) => (<h6 {...props}></h6>),
    }[headings]
  }, [headings])
  
  return (<ol
    className={className + ' '}
    {...props}
  >
    {steps.map(
      ({ title, date, description, cover, cta }) => (<TimelineStep 
        key={title}
      >
        <TimelineStepContent>
          <TimelineStepHeading
            className="flex justify-between text-blue-light mb-2"
          >
            <span className="text-md">{title}</span>
            <DateDisplay className="text-sm italic" dateString={date} />
          </TimelineStepHeading>
          <p>{description}</p>
          {cta ? <a href={cta.url}>{cta.title}</a> : null}
        </TimelineStepContent>
        <TimelineStepPicture>
          {typeof cover === 'function' ? cover() : null}
          {typeof cover === 'string'
            ? (<Image
              src={cover}
              alt={title}
              width={620}
              height={451}
              unoptimized
            />)
            : null
          }
        </TimelineStepPicture>
      </TimelineStep>)
    )}
  </ol>)
}

function TimelineStep({ children, ...props }) {
  return (<li 
    className="flex group"
    {...props}
  >
    {children}
  </li>)
}

function TimelineStepContent({ children, ...props }) {
  return (<div
    className="basis-1/2 shrink-0 group-even:order-1 order-2 group-odd:border-l-2 group-odd:border-blue-light group-even:text-right flex group-odd:justify-start justify-end items-center py-4"
  >
    <div
      className="inline-flex group-odd:-ml-4 group-even:order-1 -mr-4 relative z-10 h-8 w-8 items-center justify-center bg-blue-light rounded-full text-white-strong"
    >
      <CalendarIcon role="presentation" className="w-6 h-6" />
    </div>
    <div
      className="mx-6 max-w-md rounded-lg bg-grey-darker bg-gradient-to-b from-white-5 p-6 shadow-md shadow-black-10 border border-white-10 align-middle text-left"
      {...props}
    >
      {children}
    </div>
  </div>)
}

function TimelineStepPicture({ children, ...props }) {
  return (<figure
    className="basis-1/2 shrink-0 group-odd:order-1 order-2 group-even:border-l-2 group-even:border-blue-light px-6 flex items-center justify-center py-4"
    {...props}
  >
    {children}
  </figure>)
}