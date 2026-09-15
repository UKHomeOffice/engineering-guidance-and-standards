import {DateTime} from "luxon";

// noinspection JSUnusedGlobalSymbols included dynamically
export default (date) => DateTime.fromJSDate(date, {zone: 'utc'}).toFormat('yyyy-MM-dd')
