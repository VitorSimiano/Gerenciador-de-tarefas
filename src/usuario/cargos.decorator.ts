import { SetMetadata } from '@nestjs/common';

export const Cargos = (...cargos: string[]) => SetMetadata('cargos', cargos);