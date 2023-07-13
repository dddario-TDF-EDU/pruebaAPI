import { Controller, Get, Param, Body, Put, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public mostrarPrincipal(): string {
    return this.appService.saludar();
  }

  @Put('adoptar/:id')
  public añadirACola(
    @Body() datosCliente: any,
    @Param('id', ParseIntPipe) id: number,
  ): string {
    return this.appService.añadirACola(id, datosCliente);
  }
}
