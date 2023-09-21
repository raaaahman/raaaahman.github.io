import { useId } from 'react'

import Meter from './Meter'

export default function SkillList({ skills }) {
  const listId = useId()

  return <ul className="list-style-none text-center">
    {skills.map(({ name, value }) => {
      const labelId = listId + '-' + name.replace(' ', '_')

      return (<li className="flex justify-center items-center my-2" key={name}>
        <span id={labelId} className="flex-grow-0 flex-shrink-0 basis-[35%] md:basis-[25%] font-semibold text-white-strong text-left pe-4">{name}</span>
        <Meter value={value} aria-labelledby={labelId} />
      </li>)}
    )}
  </ul>
}
