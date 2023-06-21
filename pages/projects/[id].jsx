import Head from 'next/head'
import Layout from '../../components/Layout'
import { getAllProjectsIds, getProjectData } from '../../utils/projects'

export async function getStaticPaths() {
  const paths = getAllProjectsIds()

  return {
    paths,
    fallback: false
  }
}

export function getStaticProps({ params }) {
  const projectData = getProjectData(params.id)

  return {
    props: {
      projectData
    }
  }
}

export default function Project({ projectData }) {
  return (<Layout>
    <Head>
      <title>{projectData.title + ' | Sylvain Schellenberger'}</title>
      <meta name="description" content={projectData.description} />
    </Head>
    <h1>{projectData.title}</h1>
    
  </Layout>)
}
