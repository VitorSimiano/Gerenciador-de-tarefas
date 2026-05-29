"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefasController = void 0;
const common_1 = require("@nestjs/common");
const tarefas_service_1 = require("./tarefas.service");
const create_tarefas_dto_1 = require("./dto/create-tarefas.dto");
const update_tarefas_dto_1 = require("./dto/update-tarefas.dto");
const create_usuario_dto_1 = require("../usuario/dto/create-usuario.dto");
let TarefasController = class TarefasController {
    tarefaService;
    constructor(tarefaService) {
        this.tarefaService = tarefaService;
    }
    create(createTarefaDto) {
        return this.tarefaService.create(createTarefaDto);
    }
    adicionarColaborador(tarefaId, body) {
        return this.tarefaService.adicionarColaborador(tarefaId, body.usuarioId);
    }
    findAll() {
        return this.tarefaService.findAll();
    }
    findAtrasadas() {
        return this.tarefaService.findAtrasadas();
    }
    findOne(id) {
        return this.tarefaService.findOne(id);
    }
    findColaboradores(tarefaId) {
        return this.tarefaService.findColaboradores(tarefaId);
    }
    concluirTarefa(id) {
        return this.tarefaService.concluirTarefa(id);
    }
    update(id, updateTarefaDto) {
        return this.tarefaService.update(id, updateTarefaDto);
    }
    remove(id) {
        return this.tarefaService.remove(id);
    }
    removerColaborador(tarefaId, usuarioId) {
        return this.tarefaService.removerColaborador(tarefaId, usuarioId);
    }
};
exports.TarefasController = TarefasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tarefas_dto_1.CreateTarefaDto]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/colaboradores'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_usuario_dto_1.CreateColaboradorDto]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "adicionarColaborador", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('atrasadas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "findAtrasadas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/colaboradores'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "findColaboradores", null);
__decorate([
    (0, common_1.Patch)(':id/concluir'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "concluirTarefa", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tarefas_dto_1.UpdateTarefaDto]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)(':id/colaboradores/:usuarioId'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('usuarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "removerColaborador", null);
exports.TarefasController = TarefasController = __decorate([
    (0, common_1.Controller)('tarefas'),
    __metadata("design:paramtypes", [tarefas_service_1.TarefasService])
], TarefasController);
//# sourceMappingURL=tarefas.controller.js.map