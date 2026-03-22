import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <img
        src="/img/images/baner.png"
        alt="Mroczne Tajemnice"
        className={styles.headerBaner}
      />
    </header>
  );
}

function Home() {
  return (
    <Layout
      title="Mroczne Tajemnice"
      description="Strona poświęcona modyfikacji Mroczne Tajemnice"
    >
      <HomepageHeader />
      <main
        className={styles.mainContent}
        style={{ backgroundImage: "url('/img/images/MT%20t%C5%82o.png')" }}
      >
        <div className={styles.contentBox}>
          <p className={styles.description}>
            Strona poświęcona modyfikacji <strong>Mroczne Tajemnice</strong> i
            jej rozwinięciu <strong>Mroczne Tajemnice 2.5</strong>.
          </p>
          <p className={styles.author}>
            Prowadzona przez <strong>Bezimienny111</strong>.
          </p>
          <p className={styles.wip}>🚧 Strona w budowie 🚧</p>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
