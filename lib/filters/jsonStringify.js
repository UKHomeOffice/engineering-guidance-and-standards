module.exports = function jsonStringify(source, space = null) {
    return JSON.stringify(source, null, space);
}
