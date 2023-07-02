import { apiOptions } from "./config";

export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._body = options.body;
    this._method = options.method;
    this._validation = options.validation;
    this._opitions = options;
  }

  async getUsers() {
    try {
      const res = await fetch(`${this._baseUrl}/users`, {
        headers: this._headers,
      });

      return await this._validation(res);
    } catch (err) {
      console.error("Erro na requisição dos usuários: ", err);
    }
  }

  async getProfile() {
    try {
      const res = await fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
      });
      return await this._validation(res);
    } catch (err) {
      console.error("Erro na requisição do perfil: ", err);
    }
  }

  async updateProfile(inputValues) {
    try {
      const res = await fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify(inputValues),
      });
      return await this._validation(res);
    } catch (err) {
      console.error("Erro na atualização do perfil: ", err);
    }
  }

  async updateAvatar(avatar) {
    try {
      const res = await fetch(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify(avatar),
      });
      return await this._validation(res);
    } catch (err) {
      console.error("Erro na atualização do avatar: ", err);
    }
  }

  async getCards() {
    try {
      const res = await fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
      });
      return await this._validation(res);
    } catch (err) {
      console.error("Erro na requisição dos cartões: ", err);
    }
  }

  async setNewCard(newCard) {
    try {
      const res = await fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(newCard),
      });
      return await this._validation(res);
    } catch (err) {
      console.error("Erro na postagem de um novo cartão: ", err);
    }
  }

  async deleteCards(cardId) {
    try {
      const res = await fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      });
      return await this._validation(res);
    } catch (err) {
      console.error(`Erro ao deletar o cartão com id: ${cardId}: `, err);
    }
  }

  async setLike(cardId, method = "PUT" | "DELETE") {
    try {
      const res = await fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method,
        headers: this._headers,
      });
      return await this._validation(res);
    } catch (err) {
      console.error("Erro na atualização de curtida: ", err);
    }
  }
}

export const api = new Api(apiOptions.options());
