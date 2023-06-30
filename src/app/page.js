// `app/page.tsx` is the UI for the `/` URL

import Link from 'next/link'
import './globals.css'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Primer intento de tener algo corriendo live. Hola Tomás y José :)</h1>
      <div className={styles.buttons}>
        <Link href="/about">
          <button className={styles.recordButton} id="start">Record</button>
        </Link>
        <Link href="/dashboard">
          <button className={styles.stopButton} id="stop" disabled>Stop</button>
        </Link>
      </div>
    </div>
  );
}
