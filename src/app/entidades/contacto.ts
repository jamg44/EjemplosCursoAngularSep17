// Representa una entidad contacto
export class Contacto {

  constructor(
    public id: number,
    public nombre: string,
    public apellidos: string,
    public email: string,
    public telefono: string,
    public twitter: string,
    public facebook: string
  ) {  }

  static desdeJSON(json: any): Contacto {
    return new Contacto(
      json.id,
      json.nombre,
      json.apellidos,
      json.email,
      json.telefono,
      json.twitter,
      json.facebook
    );
  }

  generarRutaFacebook(): string {
    return this.facebook ? `https://www.facebook.com/${this.facebook}`
      : null;
  }

  generarRutaTwitter(): string {
    return this.twitter ? `https://www.twitter.com/${this.twitter}`
      : null;
  }
}
