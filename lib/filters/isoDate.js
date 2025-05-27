import {DateTime} from "luxon";

// noinspection JSUnusedGlobalSymbols included dynamically
export default (date) => DateTime.fromJSDate(date).toFormat('yyyy-MM-dd')
