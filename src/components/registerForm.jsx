import React, { useState } from 'react';
import axios from 'axios';
const RegisterForm = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha , setSenha] = useState('')
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await   axios.post ("https://localhost:500/api/users" , {
                name: nome,
                email,
                password : senha
            });
 
            alert("Usuario cadastrado com sucesso! !" + `nome: ${response.data.name} email : ${response.data.email}`)
            window.location.href = "/login"
        } catch (error) {
            if(error.response){
                alert("Erro ao cadastrar usuário")
            }else{
                alert("erro ao conectar ao servidor")
            }
        }
    };
 
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-full max-w-md px-8">
                <div className="bg-pink-200 p-6 rounded-2xl shadow-lg w-full">
                    <h2 className="text-2xl font-semibold text-center mb-6">Cadastro</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="nome" className="block mb-1">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                                className="w-full border border-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Digite seu nome"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-1">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full border border-white p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Digite seu email"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="senha" className="block mb-1">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                                className="w-full border border-white p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Digite sua senha"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-500 transition"
                        >
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
 
export default RegisterForm;
 