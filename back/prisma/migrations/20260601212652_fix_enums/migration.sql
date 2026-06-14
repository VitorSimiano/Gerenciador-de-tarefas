/*
  Warnings:

  - The values [Chefe,funcionario] on the enum `CargoUsuario` will be removed. If these variants are still used in the database, this will fail.
  - The values [EmAndamento,Finalizada,Pendente] on the enum `StatusTarefa` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CargoUsuario_new" AS ENUM ('CHEFE', 'FUNCIONARIO');
ALTER TABLE "usuarios" ALTER COLUMN "cargo" TYPE "CargoUsuario_new" USING ("cargo"::text::"CargoUsuario_new");
ALTER TYPE "CargoUsuario" RENAME TO "CargoUsuario_old";
ALTER TYPE "CargoUsuario_new" RENAME TO "CargoUsuario";
DROP TYPE "public"."CargoUsuario_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "StatusTarefa_new" AS ENUM ('PENDENTE', 'EM_ANDAMENTO', 'FINALIZADA');
ALTER TABLE "tarefas" ALTER COLUMN "status" TYPE "StatusTarefa_new" USING ("status"::text::"StatusTarefa_new");
ALTER TYPE "StatusTarefa" RENAME TO "StatusTarefa_old";
ALTER TYPE "StatusTarefa_new" RENAME TO "StatusTarefa";
DROP TYPE "public"."StatusTarefa_old";
COMMIT;
