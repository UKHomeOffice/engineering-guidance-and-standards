module.exports = (contents) => {
    return contents.match(/[,"\n\r]/)
        ? `"${contents.replaceAll(/"/g, '""')}"`
        : contents
}
