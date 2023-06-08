import "./Auth.css";

//components
import { Link } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };
  };

  return (
    <div id="register">
      <h2>ReactGran</h2>
      <p className="subtitle">Cadastre-se para usar o ReactGran</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          placeholder="Nome"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          placeholder="Senha"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name=""
          placeholder="Confirme sua Senha"
          value={confirmPassword || ""}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <input type="submit" value="Cadastrar" />
      </form>

      <p>
        Já tem conta? <Link to="/login"> Clique aqui.</Link>
      </p>
    </div>
  );
};

export default Register;
