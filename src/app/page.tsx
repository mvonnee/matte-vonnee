import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <text>matte vonnee</text>
      </main>
      <footer className={styles.footer}>
        <text>copyright</text>
      </footer>
    </div>
  );
}
