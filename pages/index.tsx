import Head from "next/head";
import { generateRSS } from "../rssUtil";
import { loadBlogPosts } from "../loader";

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
          <h1>Bad Custer</h1>
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
