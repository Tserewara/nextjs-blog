import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <p title="Algo incrível vai acontecer aqui! Espere um pouco!" style={{textAlign: "center", fontSize: "24px", cursor: "pointer"}}>
        Marĩ ĩwẽ uptabi te dza watobro ãmemhã! Sapari a'ö!
      </p>
      <img src="/images/Designer.jpeg" className="img-profile" alt="Álvaro" style={{height: "300px"}}/>
      </div>
      {/* <section className={utilStyles.headingMd}>
        <p>Hey, I'm <strong>Álvaro.</strong></p>
        <p>
          I'm a Software Engineer. I like to learn and teach.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Articles</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section> */}
      
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
