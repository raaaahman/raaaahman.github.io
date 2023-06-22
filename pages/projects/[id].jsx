import Head from 'next/head'
import Layout from '../../components/Layout'
import { getAllProjectsIds, getProjectData } from '../../utils/projects'
import Date from '../../components/Date'

export async function getStaticPaths() {
  const paths = getAllProjectsIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)

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
    <article>
      <h1>{projectData.title}</h1>
      <Date dateString={projectData.date} />
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
    </article>
  </Layout>)
}
