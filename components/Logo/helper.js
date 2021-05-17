const isSpace = (char) => char === ' ';

export const random = (max) => Math.round(Math.random() * max);

export function getDimensions(image) {
    const lines = getLines(image);
    const width = lines.reduce(maxLength, 0);
    const height = lines.length;

    return { width, height };
}

function maxLength(max, { length }) {
    return length > max ? length : max;
}

export function getPixels(image, width, height, minPixels) {
    const pixels = getImagePixels(image).map(
        (pixel) => ([ ...pixel, 'black' ])
    );

    if (pixels.length < minPixels) {
        // eslint-disable-next-line no-use-before-define
        const transparentPixels = generateRandomPixels(
            width,
            height,
            minPixels - pixels.length
        ).map(
            (pixel) => ([ ...pixel, 'transparent' ])
        );

        pixels.push(...transparentPixels);
    }

    return pixels;
}

function getImagePixels(image) {
    const lines = getLines(image);

    return lines.map(
        (line, row) => line.split('')
            .map(
                (char, column) => (isSpace(char) ? null : [ row, column ])
            )
            .filter(Boolean)
    ).reduce(
        (reduced, items) => reduced.concat(items), []
    );
}

const generateRandomPixels = (width, height, length) => Array.from(
    { length },
    () => [ random(height), random(width) ]
);

function getLines(image) {
    return image.split('\n');
}
