import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Blog' })

// 根据 tag 过滤 blog
export default function BlogTagPage({ params }: { params: { tag: string[] } }) {
  const tagArr = decodeURI(params.tag.join('/')).split('_')

  const lastTag = tagArr[tagArr.length - 1]

  const posts = allCoreContent(sortPosts(allBlogs))

  return <ListLayout posts={posts} title="All Posts" filterTag={lastTag} />
}
