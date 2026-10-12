import { DateTime } from "luxon";

export default function postDate(dateValue) {
  if (!dateValue) {
    return "";
  }

  if (typeof dateValue === "string") {
    const parsedVariants = [
      DateTime.fromISO(dateValue),
      DateTime.fromRFC2822(dateValue),
      DateTime.fromHTTP(dateValue),
    ];

    for (const parsed of parsedVariants) {
      if (parsed.isValid) {
        return parsed.toFormat("d MMMM yyyy");
      }
    }

    const fallbackDate = new Date(dateValue);
    if (!Number.isNaN(fallbackDate.getTime())) {
      return DateTime.fromJSDate(fallbackDate).toFormat("d MMMM yyyy");
    }
  }

  if (dateValue instanceof Date) {
    return DateTime.fromJSDate(dateValue).toFormat("d MMMM yyyy");
  }

  return String(dateValue);
}
