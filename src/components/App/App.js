import React from "react";
import cx from 'classnames';

import styles from "./App.module.scss";

import links from '../../consts/links'

function App() {
  return (
    <main class={styles.main}>
      <section className={styles.content}>
        <h3 className={styles.info}>
          Still thinking about content for this site
        </h3>
        <p className={styles.text}>
          in the meantime
          {' '}
          <a href="mailto:mail@akovalev.ru" className={cx(styles.link, styles.bold)}>
            mail me
          </a>
          {' '}
          or look for me here:
        </p>
        <ul>
          {links.map(({ type, label, href }) => (
            <li className={cx(styles.linkItem, styles[type])} key={type}>
              <a href={href} className={styles.link}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.filler}>
        <h1 className={styles.header}>Andres Kovalev</h1>
        <h2 className={styles.subheader}>Front-End developer</h2>
      </section>
    </main>
  );
}

export default App;
