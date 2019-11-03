import React, { useEffect } from "react";
import cx from 'classnames';
import { useSpring, animated } from "react-spring";

import styles from "./App.module.css";

import links from '../../consts/links'

const frameTranslate = translate(0.01);
const pictureTranslate = translate(0.02);
const headerTranslate = translate(0.05);
const linksTranslate = translate(0.1);

function App() {
  const [{ cursor }, setCursor] = useSpring(() => ({ cursor: [0, 0] }));

  useEffect(() => {
    const trackMouse = ({ clientX, clientY }) => {
      setCursor({ cursor: [clientX, clientY] });
    };

    window.addEventListener("mousemove", trackMouse);

    return () => window.removeEventListener("mousedown", trackMouse);
  }, [setCursor]);

  return (
    <React.Fragment>
      <animated.div
        className={ styles.frame }
        style={{
          transform: cursor.interpolate(frameTranslate)
        }}
      />
      <animated.div
        className={ styles.picture }
        style={{
          transform: cursor.interpolate(pictureTranslate)
        }}
      />
      <animated.div
        className={ styles.header }
        style={{
          transform: cursor.interpolate(headerTranslate)
        }}
      >
        <div>
          <div className={ styles.title }>Andres Kovalev</div>
          <div className={ styles.subtitle }>Front-End developer</div>
        </div>
      </animated.div>
      <animated.div
        className={ styles.links }
        style={{
          transform: cursor.interpolate(linksTranslate)
        }}
      >
        {links.map(({ type, label, href }) => (
          <a key={type} className={ cx(styles.link, styles[type]) } href={href} target="_blank">
            <span>{label}</span>
          </a>
        ))}
      </animated.div>
    </React.Fragment>
  );
}

function translate(rate) {
  return (x, y) => {
    const dx = (x - window.innerWidth / 2) * rate;
    const dy = (y - window.innerHeight / 2) * rate;

    return `translate(${dx}px, ${dy}px) rotateX(${-dx / 5}deg) rotateY(${-dy /
      5}deg)`;
  };
}

export default App;
