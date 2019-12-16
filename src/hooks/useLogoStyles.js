import { createUseStyles } from "react-jss";

import primaryLogo from '../consts/primary-logo';
import secondaryLogo from '../consts/secondary-logo';

export default createUseStyles({
  logo: {
    position: "relative",
    width: "10rem",
    height: "8rem",
    fontSize: "0.5rem",
    color: "transparent",

    "&::after": {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      display: "block",
      content: '""',
      width: "1em",
      height: "1em",
      borderRadius: "0.5em",
      transition: "all 1s ease",

      boxShadow: getShadow(primaryLogo)
    },

    "&$secondary:after": {
      boxShadow: getShadow(secondaryLogo)
    }
  },
  secondary: {}
});

function getShadow(text) {
  return text
    .split("\n")
    .flatMap(getLineShadow)
    .sort(randimize)
    .join(",");
}

function getLineShadow(text, row) {
  return text
    .split("")
    .map(getCharShadow(row, text.length))
    .filter(Boolean);
}

function getCharShadow(row, length) {
  return (char, index) => {
    if (char === " ") {
      return;
    }

    const color = char === "#" ? "black" : "transparent";

    return `${index - Math.ceil(length / 2)}em ${row + 1}em 0 -0.05em ${color}`;
  };
}

function randimize() {
  return Math.random() - 0.5;
}
