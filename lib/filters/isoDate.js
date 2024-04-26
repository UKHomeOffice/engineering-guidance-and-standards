const { DateTime } = require("luxon");

module.exports = (date) => DateTime.fromJSDate(date).toFormat('yyyy-MM-dd')
