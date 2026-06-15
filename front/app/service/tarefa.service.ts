import api from "./api";

const USUARIO_CHEFE_ID = "2";

export const tarefaService = {
  listar: async () => {
    const { data } = await api.get("/tarefas");
    return data;
  },

  criar: async (payload: any) => {
    const { data } = await api.post(
      "/tarefas",
      payload,
      {
        headers: {
          "usuario-id": USUARIO_CHEFE_ID,
        },
      }
    );

    return data;
  },

  concluir: async (id: number) => {
    const { data } = await api.patch(
      `/tarefas/${id}/concluir`
    );

    return data;
  },

  remover: async (id: number) => {
    await api.delete(`/tarefas/${id}`, {
      headers: {
        "usuario-id": USUARIO_CHEFE_ID,
      },
    });
  },
};