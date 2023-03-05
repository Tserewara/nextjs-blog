import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { MDXRemote } from "next-mdx-remote";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.data.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.data.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.data.date} />
        </div>
        <MDXRemote {...postData.mdxSource} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}