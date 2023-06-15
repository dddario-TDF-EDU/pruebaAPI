import { Controller, Param, Body, Put, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Put('adoptar/:id')
  public añadirACola(
    @Body() datosCliente: any,
    @Param('id', ParseIntPipe) id: number,
  ): string {
    return this.appService.añadirACola(id, datosCliente);
  }
}
