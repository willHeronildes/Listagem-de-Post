
import React from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';

import Header from '../../components/HeaderMain/HeaderMain';

import {Title, Card, LinePost, Card_body_post, Main, Fields, Cabecalho, Input, Btn_post, Error_message } from '../../styled-components/styles';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"; 


const validationPost = yup.object().shape({
    usuario: yup.string().required("O nome de usuario é obrigatório").max(5, "No máximo 5 caractere"),
    title: yup.string().required("O título é obrigatório").max(70, "O título precisa ter menosde 70 caracteres"),
    body: yup.string().required("A descrição é obrigatório").max(500, "A descrição precisa ter menosde 500 caracteres"),
})

function Post() {

    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = data => axios.post("https://632b49341aabd8373983a99a.mockapi.io/Posts", data)
       
        .then(() => {
            console.log("Deu tudo certo")
            navigate("/");
        })
        .catch(() => {
            console.log("DEU ERRADO")
        })

    return(
        <div>
            <Header />
            <Main>

                <Card>

                    <Title>Criar postagem</Title>

                    <LinePost></LinePost>

                    <Card_body_post>

                        <form onSubmit={handleSubmit(addPost)} >

                            <Fields>
                                <Cabecalho>Usuario</Cabecalho>
                                <Input type="text" name="usuario" {...register("usuario")} />
                                <Error_message>{errors.usuario?.message}</Error_message>
                            </Fields>

                            <Fields>
                                <Cabecalho>Título</Cabecalho>
                                <Input type="text" name="title" {...register("title")} />
                                <Error_message>{errors.title?.message}</Error_message>
                            </Fields>

                            <Fields>
                                <Cabecalho>Descrição</Cabecalho>
                                <Input type="text" name="description" {...register("body")} />
                                <Error_message>{errors.body?.message}</Error_message>
                            </Fields>

                            <Btn_post>
                                <button type="submit" >Enviar</button>
                            </Btn_post>

                        </form>

                    </Card_body_post>

                </Card>

            </Main>

        </div>
    )
}

export default Post