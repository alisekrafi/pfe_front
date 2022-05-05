export class Employe {
  // _id:String;
    cin: number = 0;
    nom: String;
    prenom: String;
    date_nais:Date;
    email: String;
    tel: number=0;
    salaire: number=0;
    genre:string;
    role: String;
    adresse: String;
    pwd:string;
    constructor(
     
      cin: number,
      nom: String,
      prenom: String,
      date_nais:Date,
      email: String,
      tel: number, 
      salaire: number,
      adresse:String,
      genre:string,
      role: String,
      pwd:string
    ) {
      // this._id="625c25fa6d4a98bfcdf4ef5c";
      this.cin = cin;
      this.nom = nom;
      this.prenom = prenom;
      this.date_nais = date_nais;
      this.email = email;
      this.tel = tel;
      this.salaire = salaire;
      this.adresse=adresse;
      this.genre=genre;
      this.role = role;
      this .pwd=pwd;
    }
  }
  