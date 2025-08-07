// noinspection JSUnusedGlobalSymbols included dynamically
export default (path, root) => {
    return `${root.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}
