export function replaceSpaceWithHyphen(text) {
    // Replace spaces with hyphens and convert to lowercase
    return text.replace(/\s+/g, '-').toLowerCase();
}