import React, { useEffect } from "react";

import axios from 'axios';

import { useForm } from "react-hook-form";

import {Title, Card, LinePost, Card_body_post, Main, Fields, Cabecalho, Input, Btn_post, Error_message } from '../../styled-components/styles';

import {useNavigate, useParams} from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";

import Header from "../../components/header/Header";

const validacaoPost = yup.object().shape({
    title: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menos de 40 caracteres"),
    body: yup.string().required("A descrição é obrigatório"),
})

function Edit(){

    const { id } = useParams()

    const navigate = useNavigate()

    const onSubmit = data => axios.put(`https://632b49341aabd8373983a99a.mockapi.io/Posts/${id}`, data)

        .then(()=>{
            navigate('/');
        })

        .catch(()=>{
            console.log("Deu errado");
        })

  
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validacaoPost)
    });

    useEffect(() =>{
        axios.get(`https://632b49341aabd8373983a99a.mockapi.io/Posts/${id}`)
        .then((response) => {
            reset(response.data)
        })
    }, [])

    return(
        <div>
            <Header />
            <Main>

                <Card>

                    <Title>Criar postagem</Title>

                    <LinePost></LinePost>

                    <Card_body_post>

                        <form onSubmit={handleSubmit(onSubmit)} >

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

export default Edit