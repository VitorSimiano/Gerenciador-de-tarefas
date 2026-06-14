import api from "./api";
import { CreateUsuarioDto } from "../types/usuario";

export const usuarioService = {
  listar: async () => {
    const { data } = await api.get("/usuarios");
    return data;
  },

  criar: async (usuario: CreateUsuarioDto) => {
    const { data } = await api.post(
      "/usuarios",
      usuario
    );

    return data;
  },

  atualizar: async (
    id: number,
    usuario: Partial<CreateUsuarioDto>
  ) => {
    const { data } = await api.patch(
      `/usuarios/${id}`,
      usuario
    );

    return data;
  },

  remover: async (id: number) => {
    await api.delete(`/usuarios/${id}`);
  },
};