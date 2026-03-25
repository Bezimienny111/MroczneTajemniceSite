import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";
import styles from "./index.module.css";

function PostCard({ title, date, permalink, description, badge }) {
  return (
    <Link to={permalink} className={styles.card}>
      <span className={styles.cardBadge}>{badge}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      {description && <p className={styles.cardDescription}>{description}</p>}
      <span className={styles.cardDate}>{date}</span>
    </Link>
  );
}

function LatestPosts() {
  const globalData = useGlobalData();
  const blogData =
    globalData?.["docusaurus-plugin-content-blog"]?.["default"]?.blogPosts ??
    [];
  const newsyData =
    globalData?.["docusaurus-plugin-content-blog"]?.["newsy"]?.blogPosts ?? [];

  const blogPosts = blogData.slice(0, 3).map((p) => ({
    ...p.metadata,
    badge: "Blog",
  }));
  const newsyPosts = newsyData.slice(0, 3).map((p) => ({
    ...p.metadata,
    badge: "News",
  }));

  const combined = [...newsyPosts, ...blogPosts].slice(0, 6);

  if (combined.length === 0) return null;

  return (
    <section className={styles.latestSection}>
      <h2 className={styles.latestTitle}>Najnowsze</h2>
      <div className={styles.cardGrid}>
        {combined.map((post) => (
          <PostCard
            key={post.permalink}
            title={post.title}
            date={post.formattedDate}
            permalink={post.permalink}
            description={post.description}
            badge={post.badge}
          />
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <Layout
      title="Mroczne Tajemnice"
      description="Strona poświęcona modyfikacji Mroczne Tajemnice"
    >
      <div
        className={styles.mainContent}
        style={{
          backgroundImage: "url('/img/images/MT%20t%C5%82o.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
          <p className={styles.credits}>
            Mod oryginalnie stworzony przez zespół{", "}
            <a
              href="https://poziomkaz.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PoziomkaZ
            </a>
            .
          </p>
        </div>
        <LatestPosts />
      </div>
    </Layout>
  );
}

export default Home;
