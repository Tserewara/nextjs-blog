import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p title="Algo incrível vai acontecer aqui!" style="text-align: center; font-size: 24px;">Marĩ ĩwẽ uptabi te dza watobro ãmemhã!</p>
      // <section className={utilStyles.headingMd}>
      //   <p>Hey, I'm <strong>Álvaro.</strong></p>
      //   <p>
      //     I'm a Software Engineer. I like to learn and teach.
      //   </p>
      // </section>
      // <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      //   <h2 className={utilStyles.headingLg}>Articles</h2>
      //   <ul className={utilStyles.list}>
      //     {allPostsData.map(({ id, date, title }) => (
      //       <li className={utilStyles.listItem} key={id}>
      //       <Link href={`/posts/${id}`}>{title}</Link>
      //       <br />
      //       <small className={utilStyles.lightText}>
      //         <Date dateString={date} />
      //       </small>
      //     </li>
      //     ))}
      //   </ul>
      // </section>
      
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    }
  }
}
