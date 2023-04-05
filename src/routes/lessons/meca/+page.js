import { solids } from "./data.js";

export function load() {
  return {
    summaries: {
      solids: solids.map((solid) => ({
        link: solid.link,
        title: solid.title,
        tagName: solid.tagName,
        tagColor: solid.tagColor,
      })),
    },
  };
}
