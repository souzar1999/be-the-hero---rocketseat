import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [whatsapp, setWhatsapp] = useState(""),
    [city, setCity] = useState(""),
    [uf, setUf] = useState(""),
    history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post("ongs", data);

      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push("/");
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color={"#E02041"} />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome da ONG"
            type="text"
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
            type="email"
          />
          <input
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder="WhatsApp"
            type="text"
          />
          <div className="input-group">
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Cidade"
              type="text"
            />
            <input
              value={uf}
              onChange={e => setUf(e.target.value)}
              placeholder="UF"
              type="text"
              style={{ width: 80 }}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
