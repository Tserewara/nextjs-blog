import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";


const postsDirectory = path.join(process.cwd(), "posts");


export function getSortedPostData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "")

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    };
  });
  // Sort posts by date
  return allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });

  // Combine the data with the id and contentHtml
  const data = {...matterResult.data}
  return {
    id,
    mdxSource,
    data
  }
}