import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

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

export function getAllProjectsIds() {
  const fileNames = fs.readdirSync(projectsDirectory)

  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, '')
    }
  }))
}

export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
  .use(html)
  .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}