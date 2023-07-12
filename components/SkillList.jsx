import styles from './SkillList.module.css'

export default function SkillList({ skills }) {
  return <ul className="list-style-none text-center">
    {skills.map(({ name, value }) => (<li className="flex justify-center items-center my-2" key={name}>
      <span className="flex-grow-0 flex-shrink-0 basis-[20%] font-semibold text-white-strong text-left lg:text-right px-4">{name}</span>
      <div className="flex-grow basis-[60%] h-1 bg-white-10">
        <div
          style={{ '--clip-value': `inset(0 ${100 - value}% 0 0)`}}
          className={"h-1 w-full bg-gradient-to-r from-blue-deep from-15% via-purple-bright to-85% to-orange-bright " + styles.clip}
        />
      </div>
    </li>))}
  </ul>
}