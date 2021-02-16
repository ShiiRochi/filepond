export const getFilenameFromURL = url => {
    if (!url) return 'file';

    return url
        .split('/')
        .pop()
        .split('?')
        .shift();
};
