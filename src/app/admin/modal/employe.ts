export class Employe {
  id :number;
    cin: number = 0;
    nom: String;
    prenom: String;
    date_nais:Date;
    email: String;
    tel: String;
    salaire: number;
    genre:string;
    role: String;
    pwd:string;
    constructor(
      id :number,
      cin: number,
      nom: String,
      prenom: String,
      date_nais:Date,
      email: String,
      tel: String,
      salaire: number,
      genre:string,
      role: String,
      pwd:string
    ) {
      this.id =id;
      this.cin = cin;
      this.nom = nom;
      this.prenom = prenom;
      this.date_nais = date_nais;
      this.email = email;
      this.tel = tel;
      this.salaire = salaire;
      this.genre=genre;
      this.role = role;
      this .pwd=pwd;
    }
  }
  