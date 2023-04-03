import { electrokinetics, electronics, electricals } from "./data.js";

export function load() {
  return {
    summaries: {
      electrokinetics: electrokinetics.map((electrokinetic) => ({
        link: electrokinetic.link,
        title: electrokinetic.title,
        tagName: electrokinetic.tagName,
        tagColor: electrokinetic.tagColor,
      })),
      electronics: electronics.map((electronic) => ({
        link: electronic.link,
        title: electronic.title,
        tagName: electronic.tagName,
        tagColor: electronic.tagColor,
      })),
      electricals: electricals.map((electrical) => ({
        link: electrical.link,
        title: electrical.title,
        tagName: electrical.tagName,
        tagColor: electrical.tagColor,
      })),
    },
  };
}
