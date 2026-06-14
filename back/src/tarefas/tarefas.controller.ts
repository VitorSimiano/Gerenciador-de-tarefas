import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefas.dto';
import { UpdateTarefaDto } from './dto/update-tarefas.dto';
import { CreateColaboradorDto } from '../usuario/dto/create-usuario.dto';
import { CargoGuard } from '../usuario/cargo.guard';
import { Cargos } from '../usuario/cargos.decorator';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefaService: TarefasService) {}

  @Post()
  @Cargos('CHEFE')
  @UseGuards(CargoGuard)
  create(@Body() createTarefaDto: CreateTarefaDto) {
    return this.tarefaService.create(createTarefaDto);
  }

  @Post(':id/colaboradores')
  @Cargos('CHEFE')
  @UseGuards(CargoGuard)
  adicionarColaborador(
    @Param('id', ParseIntPipe) tarefaId: number,
    @Body() body: CreateColaboradorDto,
  ) {
    return this.tarefaService.adicionarColaborador(tarefaId, body.usuarioId);
  }

  @Get()
  findAll() {
    return this.tarefaService.findAll();
  }

  @Get('atrasadas')
  findAtrasadas() {
    return this.tarefaService.findAtrasadas();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tarefaService.findOne(id);
  }

  @Get(':id/colaboradores')
  findColaboradores(@Param('id', ParseIntPipe) tarefaId: number) {
    return this.tarefaService.findColaboradores(tarefaId);
  }

  @Patch(':id/concluir')
  concluirTarefa(@Param('id', ParseIntPipe) id: number) {
    return this.tarefaService.concluirTarefa(id);
  }

  @Patch(':id')
  @Cargos('CHEFE')
  @UseGuards(CargoGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTarefaDto: UpdateTarefaDto,
  ) {
    return this.tarefaService.update(id, updateTarefaDto);
  }

  @Delete(':id')
  @Cargos('CHEFE')
  @UseGuards(CargoGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tarefaService.remove(id);
  }

  @Delete(':id/colaboradores/:usuarioId')
  @Cargos('CHEFE')
  @UseGuards(CargoGuard)
  removerColaborador(
    @Param('id', ParseIntPipe) tarefaId: number,
    @Param('usuarioId', ParseIntPipe) usuarioId: number,
  ) {
    return this.tarefaService.removerColaborador(tarefaId, usuarioId);
  }
}