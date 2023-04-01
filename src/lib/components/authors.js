class Author {
  constructor(name, mail, description, profil) {
    this.name = name;
    this.mail = mail;
    this.description = description;
    this.profil = profil;
  }
}

const valentin = new Author(
  "BURGAUD Valentin",
  "valentin.burgaud@ens-rennes.fr",
  "Étudiant à l'École Normale Supérieure de Rennes, je prépare le parcours enseignement à l'agrégation de sciences industrielles option génie électrique.",
  "valentin"
);

let authors = { valentin: valentin };
export default authors;
