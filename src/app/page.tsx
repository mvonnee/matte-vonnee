import styles from "./page.module.css";
import { Helmet } from "react-helmet";

export default function Home() {
  return (

    <div>
      <Helmet>
        <title>MATTE VONNÉE</title>
      </Helmet>

      <div className={styles.page}>
        <main className={styles.main}>
          <text>matte vonnee</text>
        </main>
        <footer className={styles.footer}>
          <text>copyright</text>
        </footer>
      </div>
    </div>
  );
}
