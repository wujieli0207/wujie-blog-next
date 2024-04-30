import type { TreeData } from '@uiw/react-tree'

export function createTagTree(data: Record<string, number>): TreeData[] {
  const treeData: TreeData[] = []
  const map = {}

  for (const path in data) {
    const pathArr = path.split('_')
    let currentLevel = treeData

    pathArr.forEach((item, index) => {
      const key = pathArr.slice(0, index + 1).join('_')
      if (!map[key]) {
        const node = {
          label: item,
          key: key,
          count: data[path],
        }
        map[key] = node
        currentLevel.push(node)
      } else {
        map[key].count += data[path]
      }

      if (index !== pathArr.length - 1) {
        if (!map[key].children) {
          map[key].children = []
        }
        currentLevel = map[key].children
      }
    })
  }

  // 更新标题以包含统计数量
  for (const key in map) {
    map[key].label = `${map[key].label}(${map[key].count})`
  }

  return treeData
}
