import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'

const MAX_DISPLAY = 5

export default function Home({ posts }: { posts: CoreContent<Blog>[] }) {
  return (
    <>
      <div className="">
        {/* 我的介绍 */}
        <div className="mb-12 space-y-2 pb-8 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            你好，同路人
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            欢迎来到我的数字花园，在这里我会记录我关于技术、产品、设计、商业、个人生活的思考
          </p>
        </div>
        {/* 我的项目 */}
        {/* 最近的博客 */}
        <div className="space-y-2 border-b border-gray-200 pb-8 pt-6 dark:border-gray-700">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            Recent Post
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-8">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-4 xl:col-span-3">
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              title={title}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="mt-2 flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} className="text-sm" />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-sm text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-sm font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                          title={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
            title="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
