import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  const productLink = [
    {
      name: 'Hand Drawn AI',
      href: 'https://handdrawn.ai/',
    },
    {
      name: '独立开发沉思录周刊',
      href: 'https://hackthinking.com',
    },
  ]

  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/" title={siteMetadata.title}>
            {siteMetadata.title}
          </Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          More Product:{' '}
          {productLink.map((itme) => (
            <Link key={itme.name} href={itme.href} target="_blank">
              {itme.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
