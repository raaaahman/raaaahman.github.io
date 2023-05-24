import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'data', 'projects')

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory)

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.data) {
      return 1
    } else {
      return -1
    }
  })
}