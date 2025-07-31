import React from "react";
import { useState } from "react";
import bg from "../assets/imagens/estatua.png"
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const handleChange = (e) =>{
        setFormData({
            ...formData,[e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) =>{
        e.preventDefault(); 

        console.log(`Mensagem enviada ${formData.name} , ${formData.email}`)
        console.log(`${formData.message}`)

        alert('Mensagem enviada com sucesso')

        setFormData({name:'', email:'', message:''}) /* limpa os campos nome email e mensagem */
   
    }
    return(
        <>
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
            style={{backgroundImage: `url(${bg})`}}
        >
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg">
            <h2 className="texr-x1 sm:text-2xl font-semibold mb-4 sm:md-6 text-center text-gray-800">Entre em contato</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div> {/* campo para entrada de nome */}
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nome</label>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="Digite seu nome"/>
                </div>
                <div> {/* campo para entrada de email */}
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">E-mail</label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="Digite seu E-mail"/>
                </div>
                <div> {/* campo para entrada de mensagem */}
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Mensagem</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="Digite sua mensagem..."
                    rows="5"
                    />
                </div>

                <div className="text-center"> {/* botão para enviara mensagem */}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300 w-full sm:w-full"
                    >
                        Enviar Mensagem
                    </button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}

export default ContactForm