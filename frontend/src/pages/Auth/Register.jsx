import "./Auth.css";
import Message from "../../components/Message/Message";
//components
import { Link } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";
import { register, reset } from "../../slices/authSlice";

//redux
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    dispatch(register(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

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
        {!loading && <input type="submit" value="Cadastrar" />}
        {loading && <input type="submit" value="Carregando..." />}
        {error && <Message msg={error} type="error" />}
      </form>

      <p>
        Já tem conta? <Link to="/login"> Clique aqui.</Link>
      </p>
    </div>
  );
};

export default Register;
