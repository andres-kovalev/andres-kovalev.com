export function maxLength(max, { length }) {
    return length > max ? length : max;
}

export function getProps(rows, width, height, numberOfPixels) {
    const items = rows.flatMap((line, row) =>
        line
            .split("")
            .map((char, column) => (isSpace(char) ? null : [row, column, "black"]))
            .filter(Boolean)
    );

    if (items.length > numberOfPixels.current) {
        numberOfPixels.current = items.length;
    } else {
        items.push(
            ...[...Array(numberOfPixels.current - items.length)].map(() => [
                random(height),
                random(width),
                "transparent"
            ])
        );
    }

    return shuffle(items).map(([row, column, color], key) => ({
        key,
        row,
        column,
        color
    }));
}

function isSpace(char) {
    return char === " ";
}

export function random(max) {
    return Math.round(Math.random() * max);
}

function shuffle(array) {
    const { length } = array;
    for (let i = length - 1; i > -1; i--) {
        const item = array[i];
        const j = random(i);

        array[i] = array[j];
        array[j] = item;
    }

    return array;
}