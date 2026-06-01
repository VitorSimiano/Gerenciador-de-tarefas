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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const enums_1 = require("../generated/prisma/enums");
let TarefasService = class TarefasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTarefaDto) {
        return await this.prisma.tarefa.create({
            data: createTarefaDto,
        });
    }
    async findAll() {
        return await this.prisma.tarefa.findMany();
    }
    async findOne(id) {
        const tarefa = await this.prisma.tarefa.findUnique({
            where: { id },
        });
        if (!tarefa) {
            throw new common_1.NotFoundException(`Tarefa #${id} não encontrada`);
        }
        return tarefa;
    }
    async update(id, updateTarefaDto) {
        await this.findOne(id);
        return await this.prisma.tarefa.update({
            where: { id },
            data: updateTarefaDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return await this.prisma.tarefa.delete({
            where: { id },
        });
    }
    async concluirTarefa(id) {
        const tarefa = await this.findOne(id);
        if (tarefa.status === enums_1.StatusTarefa.FINALIZADA) {
            throw new common_1.BadRequestException('Essa tarefa já foi concluída.');
        }
        const agora = new Date();
        const prazo = new Date(tarefa.prazo);
        const diasRestantes = Math.ceil((prazo.getTime() - agora.getTime()) / (1000 * 60 * 60 * 24));
        const pontos = diasRestantes > 0 ? diasRestantes * 10 : 5;
        const tarefaConcluida = await this.prisma.tarefa.update({
            where: { id },
            data: {
                status: enums_1.StatusTarefa.FINALIZADA,
                concluidoEm: agora,
            },
        });
        await this.prisma.score.create({
            data: {
                usuarioId: tarefa.atribuidoA,
                tarefaId: id,
                pontos,
            },
        });
        return { tarefaConcluida, pontos };
    }
    async findAtrasadas() {
        return await this.prisma.tarefa.findMany({
            where: {
                prazo: { lt: new Date() },
                status: { not: enums_1.StatusTarefa.FINALIZADA },
            },
        });
    }
    async adicionarColaborador(tarefaId, usuarioId) {
        await this.findOne(tarefaId);
        const jaExiste = await this.prisma.tarefaColaborador.findFirst({
            where: { tarefaId, usuarioId },
        });
        if (jaExiste) {
            throw new common_1.BadRequestException('Usuário já é colaborador dessa tarefa.');
        }
        return await this.prisma.tarefaColaborador.create({
            data: { tarefaId, usuarioId },
        });
    }
    async removerColaborador(tarefaId, usuarioId) {
        await this.findOne(tarefaId);
        return await this.prisma.tarefaColaborador.deleteMany({
            where: { tarefaId, usuarioId },
        });
    }
    async findColaboradores(tarefaId) {
        await this.findOne(tarefaId);
        return await this.prisma.tarefaColaborador.findMany({
            where: { tarefaId },
        });
    }
};
exports.TarefasService = TarefasService;
exports.TarefasService = TarefasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TarefasService);
//# sourceMappingURL=tarefas.service.js.map