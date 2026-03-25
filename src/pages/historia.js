import Layout from "@theme/Layout";
import styles from "./historia.module.css";

export default function Historia() {
  return (
    <Layout
      title="Historia"
      description="Historia modyfikacji Mroczne Tajemnice"
    >
      <div
        className={styles.pageWrapper}
        style={{
          backgroundImage: "url('/img/images/MT%20t%C5%82o.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.container}>
          <h1 className={styles.title}>Historia</h1>
          <div className={styles.content}>
            <p className={styles.wip}>🚧 Strona w budowie 🚧</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
