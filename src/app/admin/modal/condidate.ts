export class Condidate {
  id :number;
    cin: number = 0;
    nom: String;
    prenom: String;
    date_nais:Date;
    email: String;
    tel: String;
    adresse: string;
    genre:string;
    role: String;
    constructor(
      id :number,
      cin: number,
      nom: String,
      prenom: String,
      date_nais:Date,
      email: String,
      tel: String,
      adresse: string,
      genre:string,
      role: String
    ) {
      this.id =id;
      this.cin = cin;
      this.nom = nom;
      this.prenom = prenom;
      this.date_nais = date_nais;
      this.email = email;
      this.tel = tel;
      this.adresse = adresse;
      this.genre=genre;
      this.role = role;
    }
  }
  