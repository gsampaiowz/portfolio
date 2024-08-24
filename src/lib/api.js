import handler from "@/app/api/contact";

import axios from "axios";

export const sendContactForm = async (data) => {
  try {
    const response = await axios.post(handler, data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // O Axios já converte automaticamente a resposta para JSON, então você pode acessar os dados diretamente
    console.log(response.data);

    return response.data;
  } catch (error) {
    if (error.response) {
      // O servidor respondeu com um status fora do intervalo 2xx
      console.error("Erro na resposta:", error.response.data);
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      // A requisição foi feita, mas não houve resposta
      console.error("Erro na requisição:", error.request);
    } else {
      // Algo aconteceu na configuração da requisição que disparou um erro
      console.error("Erro de configuração:", error.message);
    }
    console.error(error.config);
    throw error;
  }
};
