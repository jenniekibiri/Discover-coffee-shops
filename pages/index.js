import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="allows you to discover coffee stores"
        />
      </Head>
      <main className={styles.main}>
        <Banner />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="hero image"
          />
        </div>

      </main>
    </div>
  );
}
