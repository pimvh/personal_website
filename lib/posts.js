import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'

const postsDirectory = path.join(process.cwd(), 'blog')

const options = {
    cwd: postsDirectory //Folder path
}


export function getSortedPostsData() {
  // Get file names under /blog

  //glob it.
  const fileNames = glob.sync('**/*.md', options);

  const allPostsData = fileNames.map(fileName => {

    // Remove ".md" from file name to get id
    const id = fileName.split('/')[1].replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })

}

export function getAllPostIds() {

  const fileNames = glob.sync('**/*.md', options);

  return fileNames.map(fileName => {

      var [locale, id] = fileName.split('/');

      return {
        params: {
          id: id.replace(/\.md$/, ''), locale: locale
        }
      }
  })
}

export async function getPostData(id, locale) {

  console.log(id);

  const fullPath = path.join(postsDirectory, locale, `${id}.md`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const PostContent = matterResult.content

  // Combine the data with the id and contentHtml
  return {
      id,
      PostContent,
      ...matterResult.data
  }
}
