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
      <div
        className={styles.sidebarContainer}
        style={{ backgroundImage: "url('/img/images/MT%20t%C5%82o.png')" }}
      >
        <aside className={styles.leftSidebar}>
          <a href="/">🏠 Główna</a>
        </aside>
        <main className={styles.mainContent}>
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
        <aside className={styles.rightSidebar}>
          <div className={styles.sidebarSection}>
            <h4>Download</h4>
            <ul>
              <li>
                <a
                  href="https://sefaris.eu/mroczne-tajemnice-2-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MT v2.5
                </a>
              </li>
              <li>
                <a
                  href="https://www.sefaris.eu/mroczne-tajemnice"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MT 2.02
                </a>
              </li>
              <li>
                <a
                  href="https://www.sefaris.eu/union/plugins"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Union i Pluginy
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SaiyansKing/GD3D11/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DX11
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SaiyansKing/Gothic-LegacyAltRenderer/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Legacy Alt Renderer
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.sidebarSection}>
            <h4>Przydane linki</h4>
            <ul>
              <li>
                <a
                  href="https://discord.gg/hP2g4MQS5T"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://mt.mody.sefaris.eu/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solucja 2.5
                </a>
              </li>
              <li>
                <a
                  href="/files/Solucja_MT.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solucja 2.02
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.sidebarSection}>
            <h4>Zaprzyjaźnieni</h4>
            <ul>
              <li>
                <a
                  href="https://discord.gg/9EVFJv5Uyf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord Sefaris
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </Layout>
  );
}

export default Home;
