import Navbar from './navbar'
import Footer from './footer'
import styles from './layout.module.css'
import { Flex,Box } from '@radix-ui/themes'
type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {

  return (
    <>
      <Flex gap="3">
        <Box width="9" height="9">
          <Navbar />
        </Box>
        <Box width="9" height="9">
          <main className={styles.main}>{children}</main>
        </Box>
      </Flex>
      <Footer />
    </>
  )
}