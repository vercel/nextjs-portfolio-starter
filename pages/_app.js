import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '../styles/main.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()

useEffect(() => {
  const path = router.asPath;
  document.body.classList.remove('home-bg', 'portfolio-bg', 'blog-bg', 'teaching-bg');
  
  if (path === '/') document.body.classList.add('home-bg');
  else if (path.includes('/posts/teaching')) document.body.classList.add('teaching-bg');
  else if (path.includes('/posts')) document.body.classList.add('blog-bg');
  else if (path.includes('/portfolio')) document.body.classList.add('portfolio-bg');
}, [router.asPath]);



    return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
