import api from "./api";

export const scoreService = {
  listarRanking: async () => {
    const { data } = await api.get("/score/ranking");
    return data;
  },

  listarScores: async () => {
    const { data } = await api.get("/score");
    return data;
  },

  buscarPorUsuario: async (usuarioId: number) => {
    const { data } = await api.get(
      `/score/usuario/${usuarioId}`
    );

    return data;
  },
};