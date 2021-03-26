import Head from 'next/head'
import Intro from '../components/intro'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Spider Webs</title>
        <link rel="icon" href="/spider.svg" />
      </Head>
      <Intro />
    </Layout>
  )
}
    
