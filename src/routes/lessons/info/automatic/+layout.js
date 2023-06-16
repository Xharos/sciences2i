import { automatics } from "./../data.js";

export function load() {
  const summaries = automatics.map((automatic, index) => ({
    link: automatic.link,
    title: automatic.title,
    tagName: automatic.tagName,
    tagColor: automatic.tagColor,
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
