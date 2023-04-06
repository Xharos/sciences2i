import { electricals } from "./../data.js";

export function load() {
  const summaries = electricals.map((electrical, index) => ({
    link: electrical.link,
    title: electrical.title,
    tagName: electrical.tagName,
    tagColor: electrical.tagColor,
    index: index,
  }));

  function getElement(name) {
    const index = summaries.findIndex(
      (element) => element.title.toLowerCase() === name.toLowerCase()
    );

    if (index === -1) {
      return null;
    }

    const element = summaries[index];

    const prevElement =
      index > 0 ? summaries[index - 1] : summaries[summaries.length - 1];

    const nextElement =
      index < summaries.length - 1 ? summaries[index + 1] : summaries[0];

    return [prevElement, element, nextElement];
  }

  return { summaries, getElement };
}
