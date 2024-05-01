import { useEffect, useState } from 'react'

// 判断是不是默认偏好暗色模式
export const usePreferDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const matchDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

    // 设置初始值
    setIsDarkMode(matchDarkMode.matches)

    // 监听系统颜色模式变化
    const handler = (e) => setIsDarkMode(e.matches)
    matchDarkMode.addListener(handler)

    // 组件卸载时移除监听器
    return () => matchDarkMode.removeListener(handler)
  }, [])

  return isDarkMode
}
