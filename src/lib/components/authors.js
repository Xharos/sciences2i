import valentinLogo from "$lib/assets/valentin.webp";
import fabienLogo from "$lib/assets/fabien.webp";

class Author {
  constructor(name, mail, description, logo) {
    this.name = name;
    this.mail = mail;
    this.description = description;
    this.logo = logo;
  }
}

const valentin = new Author(
  "BURGAUD Valentin",
  "valentin.burgaud@ens-rennes.fr",
  "Étudiant à l'École Normale Supérieure de Rennes, je prépare le parcours enseignement à l'agrégation de sciences industrielles option génie électrique.",
  valentinLogo
);

const fabien = new Author(
    "SANCHEZ Fabien",
    "fabien.sanchez@ens-rennes.fr",
    "Étudiant à l'École Normale Supérieure de Rennes, major de l'agrégation de sciences industrielles option génie électrique 2022.",
    fabienLogo
);

let authors = { valentin: valentin};
export default authors;
