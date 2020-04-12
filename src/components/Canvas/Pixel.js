import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Pixel.module.scss';

import { random } from './helper';

function Pixel({ row, column, color, scale = 1 }) {
    return (
        <circle
            className={cx(styles.pixel, styles[`shake-${ random(9) }`])}
            cx={column * scale + 5}
            cy={row * scale}
            r="4.5"
            fill={color}
        />
    );
}

Pixel.propTypes = {
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    scale: PropTypes.number
};

export default Pixel;
