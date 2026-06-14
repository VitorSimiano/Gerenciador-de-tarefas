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
exports.ComentariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ComentariosService = class ComentariosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createComentarioDto) {
        return await this.prisma.comentario.create({
            data: createComentarioDto,
        });
    }
    async findAll() {
        return await this.prisma.comentario.findMany();
    }
    async findByTarefa(tarefaId) {
        return await this.prisma.comentario.findMany({
            where: { tarefaId },
        });
    }
    async findOne(id) {
        const comentario = await this.prisma.comentario.findUnique({
            where: { id },
        });
        if (!comentario) {
            throw new common_1.NotFoundException(`Comentário #${id} não encontrado`);
        }
        return comentario;
    }
    async update(id, updateComentarioDto) {
        await this.findOne(id);
        return await this.prisma.comentario.update({
            where: { id },
            data: updateComentarioDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return await this.prisma.comentario.delete({
            where: { id },
        });
    }
};
exports.ComentariosService = ComentariosService;
exports.ComentariosService = ComentariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComentariosService);
//# sourceMappingURL=comentarios.service.js.map