import "./Auth.css";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";

//hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../slices/authSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const disptach = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    disptach(login(user));
  };

  useEffect(() => {
    disptach(reset());
  }, [disptach]);
  return (
    <div id="login">
      <h2>ReactGran</h2>
      <p className="subtitle">Faça o login para ver o que há de novo.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email || ""}
        />
        <input
          type="text"
          name=""
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password || ""}
        />
        {!loading && <input type="submit" value="Logar" />}
        {loading && <input type="submit" value="Carregando..." />}
        {error && <Message msg={error} type="error" />}
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Clique Aqui.</Link>
      </p>
    </div>
  );
};

export default Login;
