import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

export const metadata = {
  title: 'Andrew Kallemeyn',
  description: 'A product designer living in Nashville, TN.',
  openGraph: {
    url: 'http://kallemeyn.me',
    image: 'http://kallemeyn.me/og_poster.png',
  },
};
console.log(styles);
export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link href="https://api.fontshare.com/v2/css?f[]=archivo@400&f[]=clash-display@600&display=swap" rel="stylesheet" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.title} />
        <meta property="og:image" content={metadata.openGraph.image} />        
      </Head>
      <main className={styles.Main}>
        <nav>
          <h1>Andrew Kallemeyn</h1>
        </nav>
        <article>
          <img src="/intro_mark.svg" />
          <h2>I bring ideas to life with design and technology.</h2>
          <p>I currently work as a Lead Designer at Ramsey Solutions in Nashville, TN building products that help people get out of debt.</p>
          <p>
            🧠 &nbsp;<a href="https://mirror.xyz/andrew.kallemeyn.eth">Random Thoughts</a><br />
            📖 &nbsp;Have an Amazon Kindle? <a href="https://chrome.google.com/webstore/detail/kindle-highlights/iokepmgnajdjanobkccflilmepjpmjnm">See My Chrome Extension</a>
          </p>
          <ul>
            <li><a href="https://twitter.com/ndrewkallemeyn">Twitter</a></li>
            <li><a href="https://dribbble.com/andrewkallemeyn">Dribbble</a></li>
            <li><a href="https://github.com/andrewkallemeyn">GitHub</a></li>
            <li><a href="https://linkedin.com/in/andrew-kallemeyn-6203489a">LinkedIn</a></li>
          </ul>        
        </article>
      </main>
    </>
  )
}
