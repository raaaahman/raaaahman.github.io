import { PencilIcon, CodeBracketIcon } from '@heroicons/react/24/solid'

const categoryIcons = new Map()

categoryIcons.set('writing', PencilIcon)
categoryIcons.set('code', CodeBracketIcon)

export default function CategoryIcon({ category, className, ...props }) {
  const Icon = categoryIcons.get(category)
  
  return Icon
    ? (<Icon className={ className || 'w-6 h-6'} {...props} />)
    : null
}