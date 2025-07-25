// noinspection JSUnusedGlobalSymbols included dynamically
export default (contents) => {
    return contents.match(/[,"\n\r]/)
        ? `"${contents.replaceAll(/"/g, '""')}"`
        : contents
}
