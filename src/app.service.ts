import { Injectable } from '@nestjs/common';
import { transporter } from './mailer';
import { Mascota } from './entity/mascota/mascota/mascota';

@Injectable()
export class AppService {
  private mascota1: Mascota = new Mascota('manchitas', 'perro', 4, true);
  private mascota2: Mascota = new Mascota('oso', 'gato', 0, false);
  private mascotasArray: Mascota[] = [this.mascota1, this.mascota2];
  // private enviaMail(paramCliente): boolean {
  //   transporter.sendMail({
  //     from: '"👻" <davidwiz.one@gmail.com>', // sender address
  //     to: 'arturoblanco@tdf.edu.ar', // list of receivers
  //     subject: 'funciona?', // Subject line
  //     // text: 'A su maquina', // plain text body
  //     html: '<h1>Podemos enviar</h1>', // html body
  //   });
  // }

  private enviarMail(mascotaID, paramCliente): boolean {
    function enviado(): boolean {
      let local;
      const nombreMascota: string = this.mascotasArray[mascotaID].getNombre();
      const nombreCliente: string = paramCliente.nombre;
      transporter.sendMail(
        {
          from: '"👻" <davidwiz.one@gmail.com>', // sender address
          to: paramCliente.email, // list of receivers
          subject: 'Adopción Mascota, Adoptapp', // Subject line
          text:
            'Felicidades ' +
            nombreCliente +
            ', se ha registrado como adoptante de ' +
            nombreMascota, // plain text body
          //se puede modularizar todo este paso, buscar como más adelante, el codigo es dificil de interpretar.
        },
        function (error, info) {
          if (error) {
            local = false;
          } else {
            local = true;
          }
        },
      );
      return local;
    }
    return enviado();
    //ejemplo de como funcionaria la respuesta, y la lógica de modularizacion: https://stackoverflow.com/questions/43377400/nodemailer-not-sending-response
  }

  //añadir DeepEmailValidator https://www.abstractapi.com/guides/node-email-validation#:~:text=You%20can%20check%20if%20an,this%3A%20“550-5.1.

  public añadirACola(mascotaID, paramCliente): string {
    //como paso anterior, deberiamos verificar si el email es verdadero, despues proceder a enviar una respuesta.
    let resultado: boolean = false;
    if (mascotaID < this.mascotasArray.length) {
      resultado = this.enviarMail(mascotaID, paramCliente);
    }
    if (resultado === false) {
      return 'falla en la operación revise sus datos.';
    } else {
      this.mascotasArray[mascotaID].addInteresado();
      return (
        'añadido a la lista de adoptantes, hay ' +
        (Number(this.mascotasArray[mascotaID].getInteresados()) - 1) +
        ' adoptantes antes que usted.'
      );
    }
  }

  //definir el paramCLiente, seria el json que contiene los datos del cliente, ahora mismo exige tener un email y un nombre.
}
