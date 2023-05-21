import Head from "next/head";
import { generateRSS } from "../rssUtil";
import { loadBlogPosts } from "../loader";
import Link from "next/link";

const Home = () => {
  return (
    <div className="content">
      <Head>
        <title>Bad Custer</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="section">
        <main>
          <h2>Bad Custer</h2>
          <p>We're a band. But we're so much more than a band.  We're kidding. We're just a band.</p>
          <p>Check us out on <Link href="https://www.instagram.com/therealbadcuster/">Instagram</Link></p>
          <p>Listen to our music on <Link href="https://open.spotify.com/artist/4DZ8fKIQM5cpAVAQy3zs9L">Spotify</Link> or <Link href="https://itunes.apple.com/us/artist/bad-custer/1304505923">Apple Music</Link> or <Link href="https://badcuster.bandcamp.com/">Bandcamp</Link>.</p>
          <p>Send us an <Link href="mailto:badcuster@gmail.com">email</Link> if you want.</p>
        </main>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const readmeFile = await import(`../${"README.md"}`);
  const readme = readmeFile.default;
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts);

  const props = {
    readme: readme,
    posts,
  };

  return { props };
};
