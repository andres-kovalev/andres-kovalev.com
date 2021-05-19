// eslint-disable react/no-array-index-key
/* eslint-disable react/no-array-index-key */
import React, { useRef, useEffect } from 'react';
import cx from 'classnames';

import styles from './Logo.module.scss';

import PRIMARY_TEXT from '../../consts/primary-logo';
import SECONDARY_TEXT from '../../consts/secondary-logo';

import { getDimensions, getPixels, random } from './helper';

const LOGO_UPDATE_INTERVAL = 4000;
const LOGO_MIN_PIXELS = 250;
const LOGO_SCALE = 10;

const PRIMARY_TEXT_DIMENSIONS = getDimensions(PRIMARY_TEXT);
const SECONDARY_TEXT_DIMENSIONS = getDimensions(SECONDARY_TEXT);
const LOGO_WIDTH = Math.max(PRIMARY_TEXT_DIMENSIONS.width, SECONDARY_TEXT_DIMENSIONS.width);
const LOGO_HEIGHT = Math.max(PRIMARY_TEXT_DIMENSIONS.height, SECONDARY_TEXT_DIMENSIONS.height);

const getPixelProps = ([ row, column, color ]) => ({
    cx: column * LOGO_SCALE + 5,
    cy: row * LOGO_SCALE,
    fill: color
});

function Logo() {
    const svgRef = useRef();

    useEffect(() => {
        let isSecondary = false;

        const update = () => {
            isSecondary = !isSecondary;

            if (!svgRef.current) {
                return;
            }

            const image = isSecondary ? SECONDARY_TEXT : PRIMARY_TEXT;
            const pixels = getPixels(image, LOGO_WIDTH, LOGO_HEIGHT, LOGO_MIN_PIXELS);
            const nodes = Array.from(svgRef.current.querySelectorAll('circle'));

            // eslint-disable-next-line no-restricted-syntax
            for (const pixel of pixels) {
                const index = random(nodes.length - 1);
                const [ node ] = nodes.splice(index, 1);

                Object.entries(getPixelProps(pixel)).forEach(([ prop, value ]) => {
                    node.setAttribute(prop, value);
                });
            }
        };

        const interval = setInterval(update, LOGO_UPDATE_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    return (
        <svg
            viewBox={`0 0 ${ LOGO_WIDTH * LOGO_SCALE } ${ LOGO_HEIGHT * LOGO_SCALE }`}
            aria-label="Andres Kovalev - Software engineer"
            className={ styles.logo }
            ref={ svgRef }
        >
            {getPixels(PRIMARY_TEXT, LOGO_WIDTH, LOGO_HEIGHT, LOGO_MIN_PIXELS).map(
                (pixel, key) => (
                    <circle
                        key={ key }
                        className={cx(styles.pixel, styles[`shake-${ random(9) }`])}
                        r="4.5"
                        {...getPixelProps(pixel)}
                    />
                )
            )}
        </svg>
    );
}

export default Logo;
