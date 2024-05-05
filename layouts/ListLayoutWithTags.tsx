/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { createTagTree, removeTagBrackets } from 'utils/tag'
import { Tree } from '@douyinfe/semi-ui'
import { useMemo, useState } from 'react'
import { Tag as SemiTag, SideSheet as SemiSideSheet, Button as SemiButton } from '@douyinfe/semi-ui'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
}

const POSTS_PER_PAGE = 5

function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-2 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <button
            className="hover:text-primary-600 dark:hover:text-primary-400"
            onClick={() => onPageChange(currentPage - 1 === 1 ? 1 : currentPage - 1)}
          >
            Previous
          </button>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <button
            className="hover:text-primary-600 dark:hover:text-primary-400"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({ posts, title }: ListLayoutProps) {
  const tagTree = createTagTree(tagData)

  const [selectedTag, setSelectedTag] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [isCloseTagFilter, setIsShowTagFilter] = useState(false)

  const [tagSheetVisible, setTagSheetVisible] = useState(false)
  const toggleTagSheetVisible = () => {
    setTagSheetVisible(!tagSheetVisible)
  }

  // 根据 tag 过滤文章
  const filteredPostsByTag = useMemo(() => {
    return posts.filter(
      (post) => post.tags && post.tags.some((t) => t.toLowerCase().includes(selectedTag))
    )
  }, [posts, selectedTag])

  // 分页控制
  const filteredPosts = filteredPostsByTag.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <>
      <div>
        {/* 博客列表 */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h1>

          <div className="flex items-center space-x-2">
            {selectedTag !== '' && (
              <SemiTag size="large" type="light" closable onClose={() => setSelectedTag('')}>
                {selectedTag}
              </SemiTag>
            )}
            <SemiButton theme="borderless" type="tertiary" onClick={toggleTagSheetVisible}>
              <span className="text-gray-900">Tags</span>
            </SemiButton>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <ul>
            {filteredPosts.map((post) => {
              const { path, date, title, summary, tags } = post
              return (
                <li key={path} className="rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
                  <article className="space-2 flex flex-col p-1 xl:space-y-0">
                    <div className="space-y-3">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>
                        <div className="mt-4 flex justify-between">
                          <span>
                            {tags?.map((tag) => (
                              <Tag key={tag} text={tag} className="mr-2 text-xs" />
                            ))}
                          </span>
                          <dl>
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-xs font-medium leading-6 text-gray-500 dark:text-gray-400">
                              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
          {pagination && pagination.totalPages > 1 && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={setPageNumber}
            />
          )}
        </div>
      </div>

      {/* tags */}
      <SemiSideSheet
        title="All Tags"
        width={350}
        visible={tagSheetVisible}
        onCancel={toggleTagSheetVisible}
      >
        <Tree
          treeData={tagTree}
          defaultExpandAll
          renderLabel={(label) => (
            <span
              className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
              aria-label={`View posts tagged ${removeTagBrackets(label as string)}`}
            >
              {label}
            </span>
          )}
          onSelect={(_selectedKeys, _selected, selectedNode) => {
            setPageNumber(1)
            setSelectedTag(removeTagBrackets(selectedNode.label as string))
            toggleTagSheetVisible()
          }}
        />
      </SemiSideSheet>
    </>
  )
}
