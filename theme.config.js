import React from 'react'

const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem', textAlign: 'center' }}>
      <time>{YEAR}</time> © Aleksander Shchetinin.
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}

/*     <a href="/feed.xml">RSS</a>
        a {
          float: right;
        }
*/
