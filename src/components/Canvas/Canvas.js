import React, { useRef } from 'react';

import { maxLength, getProps } from './helper';
import Pixel from './Pixel';

function Canvas({ label, image, minPixels = 0, scale = 10, className }) {
    const pixels = useRef(minPixels);
    const lines = image.split("\n");
    const width = lines.reduce(maxLength, 0);
    const height = lines.length;

    return (
        <svg
            viewBox={`0 0 ${width * scale} ${height * scale}`}
            aria-label={ label }
            className={ className }
        >
            {getProps(lines, width, height, pixels).map(props => (
                <Pixel {...props} scale={ scale } />
            ))}
        </svg>
    );
}

export default Canvas;