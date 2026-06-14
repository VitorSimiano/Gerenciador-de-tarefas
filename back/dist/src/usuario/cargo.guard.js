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
exports.CargoGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const prisma_service_1 = require("../prisma/prisma.service");
let CargoGuard = class CargoGuard {
    reflector;
    prisma;
    constructor(reflector, prisma) {
        this.reflector = reflector;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const cargosPermitidos = this.reflector.get('cargos', context.getHandler());
        if (!cargosPermitidos)
            return true;
        const request = context.switchToHttp().getRequest();
        const usuarioId = Number(request.headers['usuario-id']);
        if (!usuarioId) {
            throw new common_1.ForbiddenException('Header usuario-id é obrigatório.');
        }
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: usuarioId },
        });
        if (!usuario || !cargosPermitidos.includes(usuario.cargo)) {
            throw new common_1.ForbiddenException('Você não tem permissão para essa ação.');
        }
        return true;
    }
};
exports.CargoGuard = CargoGuard;
exports.CargoGuard = CargoGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector, prisma_service_1.PrismaService])
], CargoGuard);
//# sourceMappingURL=cargo.guard.js.map