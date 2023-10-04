import '@radix-ui/themes/styles.css';
import type { ReactElement } from 'react'
import Layout from '../components/layout'

export default function Page() {
    return <section>home</section>
  }
  Page.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }