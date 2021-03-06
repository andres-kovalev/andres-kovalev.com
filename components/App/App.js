import React from 'react';
import cx from 'classnames';

import styles from './App.module.scss';

import links from '../../consts/links';
import Logo from '../Logo';

function App() {
    return (
        <main className={styles.main}>
            <section className={styles.content}>
                <h3 className={styles.info}>
          Thinking about content for this page
                </h3>
                <p className={styles.text}>
          in the meantime
                    {' '}
                    <a href="mailto:mail@andres-kovalev.com" className={cx(styles.link, styles.bold)}>
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
            <section className={cx('logo', styles.logo)}>
                <script dangerouslySetInnerHTML={{ __html: `(${ updateLogo.toString() })()` }} />
                <Logo />
            </section>
        </main>
    );
}

function updateLogo() {
    const LOGO_COLORS = [ 'pink', 'purple', 'green', 'blue', 'yellow' ];
    const colorClass = LOGO_COLORS[Math.round(Math.random() * LOGO_COLORS.length)];

    document.querySelector('.logo').classList.add(colorClass);
}

export default App;
