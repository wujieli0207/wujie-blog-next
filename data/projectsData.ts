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
<br>1. 支持导出自己和即友的动态列表，同时支持导出个人收藏
<br>2. 支持导出图片、动态链接、引用动态等完整信息
<br>3. 支持无缝导入 Obsidian、Heptabase 等笔记工具`,
    imgSrc: '/static/images/jike-export.png',
    href: 'https://jike-export.wujieli.com/',
  },
  {
    title: 'Hand Drawn AI: ',
    description: `Where Hand Drawn Art Meets AI Magic
<br>
<br>Elevate your branding, marketing, and personal projects with unique AI-enhanced hand drawn art`,
    imgSrc: '/static/images/hand-drawn-ai.png',
    href: 'https://handdrawn.ai',
  },
]

export default projectsData
