const getPx = (num: number) => `${num}px`;

export const COLORS = {
    LT_BLUE: "#9bd1e9",
    BLUE: "#1688b8",
    DK_BLUE: "#023252",

    LT_PURPLE: "#B19CD9",
    PURPLE: "#7d5eb6",
    DK_PURPLE: "#20113a"
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
    bottom: 75
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

    const ret = `transition: ${property.join(`${transition}, `)}${transition};`

    return ret;
}
