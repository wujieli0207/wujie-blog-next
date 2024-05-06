interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '即刻导出',
    description: `导出即刻动态为本地 Markdown 文件: 
<br>1. 支持导出自己和即友的动态列表
<br>2. 支持导出图片、动态链接、引用动态等完整信息
<br>3. 支持无缝导入 Obsidian、Heptabase 等笔记工具`,
    imgSrc: '/static/images/jike-export.png',
    href: 'https://jike-export.wujieli.com/',
  },
]

export default projectsData
