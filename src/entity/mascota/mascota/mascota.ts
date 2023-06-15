export class Mascota {
  private nombre: string;
  private tipo: string;
  private edad: number;
  private vacunado: boolean;
  private cantInteresados: number;
  constructor(
    pNombre: string,
    pTipo: string,
    pEdad: number,
    pVacunado: boolean,
  ) {
    this.nombre = pNombre;
    this.tipo = pTipo;
    this.edad = pEdad;
    this.vacunado = pVacunado;
    this.cantInteresados = 0;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getInteresados(): number {
    return this.cantInteresados;
  }

  public addInteresado(): void {
    this.cantInteresados++;
  }
}
