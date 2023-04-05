import { automatics } from "./data.js";

export function load() {
  return {
    summaries: {
      automatics: automatics.map((automatic) => ({
        link: automatic.link,
        title: automatic.title,
        tagName: automatic.tagName,
        tagColor: automatic.tagColor,
      })),
    },
  };
}
