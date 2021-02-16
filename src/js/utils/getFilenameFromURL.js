export const getFilenameFromURL = url => {
    if (!url) return '';

    return url
        .split('/')
        .pop()
        .split('?')
        .shift();
};
