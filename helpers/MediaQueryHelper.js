const size = {
    mobileS: '319px',
    mobileM: '374px',
    mobileL: '424px',
    tablet: '767px',
    laptop: '1023px',
    laptopL: '1439px',
    desktop: '2559px'
}

export const device = {
    lowerThanMobileS: `(max-width: ${size.mobileS})`,
    lowerThanMobileM: `(max-width: ${size.mobileM})`,
    lowerThanMobileL: `(max-width: ${size.mobileL})`,
    lowerThanTablet: `(max-width: ${size.tablet})`,
    lowerThanLaptop: `(max-width: ${size.laptop})`,
    lowerThanLaptopL: `(max-width: ${size.laptopL})`,
    lowerThanDesktop: `(max-width: ${size.desktop})`,
    lowerThanDesktopL: `(max-width: ${size.desktop})`
};