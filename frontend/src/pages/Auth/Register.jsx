import "./Auth.css";

//components
import { Link } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="register">
      <h2>ReactGran</h2>
      <p className="subtitle">Cadastre-se para usar o ReactGran</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" name="" id="" placeholder="Senha" />
        <input type="password" name="" id="" placeholder="Confirme sua Senha" />

        <input type="submit" value="Cadastrar" />
      </form>

      <p>
        Já tem conta? <Link to="/login"> Clique aqui.</Link>
      </p>
    </div>
  );
};

export default Register;
