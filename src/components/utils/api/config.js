export const BASE_URL = "https://around.nomoreparties.co/v1/web_ptbr_04";
export const API_TOKEN = "9f966c20-4993-48d0-ac53-d7e32ad06a70";

const headers = {
  authorization: API_TOKEN,
  "Content-Type": "application/json",
};

export const apiOptions = {
  validation: async (res) => {
    if (res.ok) {
      const resp = await res.json();
      return resp;
    }
    return await Promise.reject(`Error: ${res.status}`);
  },

  options: () => ({
    baseUrl: `${BASE_URL}`,
    headers,
    validation: apiOptions.validation,
  }),

  user: "d12b45c6bd03be9014a90a62",
};
