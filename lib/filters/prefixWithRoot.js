module.exports = (path, root) => {
    return `${root.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}
