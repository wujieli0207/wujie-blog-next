import Link from 'next/link'
import { formatTag } from 'utils/tag'

interface Props {
  text: string
  className?: string
}

const Tag = ({ text, className }: Props) => {
  return (
    <Link
      href={`/blog/tag/${formatTag(text)}`}
      title={text.split(' ').join('-')}
      className={`mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 ${className}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
