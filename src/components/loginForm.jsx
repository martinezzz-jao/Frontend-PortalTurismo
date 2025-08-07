import React, {use, useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom"
 
const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate();
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://backend-portalturismo-qoo2.onrender.com/api/auth/login", {
            email,
            password: senha
          })
          const userData = response.data;
          localStorage.setItem("user", JSON.stringify(userData))
          alert("usuario logado com sucesso!!")
          navigate("/")
        } catch (error) {
          if (error.response) {
            alert("Erro ao logar usuário email ou senha incorretos")
          } else {
            alert("erro ao conectar ao servidor")
          }
        }
    };
 
 
 
    return(
        <>
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-2x1 font-semibold text-center mb-6">Login</h2>
            <form>
                <div>
                    <label>E-mail</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                        focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        placeholder="Digite seu email"
                    />
                </div>
                <div>
                    <label>Senha</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                        focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        placeholder="Digite sua senha"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-b-lg hover:gb-blue-300 transition">
                        Entrar
                    </button>
 
            </form>
       
       
        </div>
        </>
    )
}
 
export default LoginForm;