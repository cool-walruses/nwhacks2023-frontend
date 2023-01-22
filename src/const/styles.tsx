const getPx = (num: number) => `${num}px`;

export const colors = {
}

export const FONT_WEIGHT = {
    REGULAR: 300,
    BOLD: 500,
    BLACK: 700
}

const padding = {
    left: 75,
    right: 75,
    top: 30,
    bottom: 50
}

export const HOME_PADDING = {
    LEFT: getPx(padding.left),
    RIGHT: getPx(padding.right),
    TOP: getPx(padding.top),
    BOTTOM: getPx(padding.bottom)
}

const paddingExtraFactor = 2;

export const HOME_PADDING_EXTRA = {
    LEFT: getPx(padding.left * paddingExtraFactor),
    RIGHT: getPx(padding.right * paddingExtraFactor),
    TOP: getPx(padding.top * paddingExtraFactor),
    BOTTOM: getPx(padding.bottom * paddingExtraFactor * paddingExtraFactor)
}

export const transition = (property: string | string[]) => {
    const transition = " 0.25s ease-in-out";

    if (!Array.isArray(property)) return `transition: ${property}${transition};`

    return `transition: ${property.forEach((p) => `${p}${transition}, `)}`;
}
