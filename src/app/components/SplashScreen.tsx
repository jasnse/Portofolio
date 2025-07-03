"use client";

import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  return (
    <div className={styles.container}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
      >
        <source src="/background_splashscreen.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}>
        <h1 className={`${styles.title} text-6xl md:text-8xl font-extrabold tracking-tight leading-tight`}>
          WELCOME TO MY <span className="text-yellow-400">PORTFOLIO</span>
        </h1>
      </div>
    </div>
  );
}