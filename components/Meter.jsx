import styles from './SkillList.module.css'

export default function Meter({ value, ...props }) {
  return (<div
    role="meter"
    aria-valuenow={value}
    aria-valuetext={value + '%'}
    aria-valuemin={0}
    aria-valuemax={100}
    className="flex-grow h-1 bg-white-10"
    {...props}
  >
    <div
      style={{ '--clip-value': `inset(0 ${100 - value}% 0 0)` }}
      className={"h-1 w-full bg-gradient-to-r from-blue-deep from-15% via-purple-bright to-85% to-orange-bright " + styles.clip}
    />
  </div>)
}