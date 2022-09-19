import React from "react";

import {Link} from 'react-router-dom';

import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './Post.css';

import Header from "../../components/header/Header";

const validacaoPost = yup.object().shape({
    title: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menos de 40 caracteres"),
    description: yup.string().required("A descrição é obrigatório").max(150, "A descrição precisa ter menos de 150 caracteres"),
    content: yup.string().required("O conteúdo é obrigatório").max(500, "O conteúdo precisa ter menos de 500 caracteres")
})

function Post(){
      
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validacaoPost)
    });
    const onSubmit = data => console.log(data);

    return(
        <div>
            <Header/>
            <main>
                <div className="card-post">
                    <h1>Criar Postagem</h1>
                    <div className="line-post"></div>
                    <div className="card-body-post">
                       <form onSubmit={handleSubmit(onSubmit)}>
                           <div className="fields">
                               <label>Titulo</label>
                               <input type="text" name="title" {...register("title")}/>
                               <p className="error-message">{errors.title?.message}</p>
                           </div>
                           <div className="fields">
                               <label>Descrição</label>
                               <input type="text" name="description" {...register("description")}/>
                               <p className="error-message">{errors.description?.message}</p>
                           </div>
                           <div className="fields">
                               <label>Conteúdo</label>
                               <textarea type="text" name="content" {...register("content")}></textarea>
                               <p className="error-message">{errors.content?.message}</p>
                           </div>
                           <div className="btn-post">
                               <button type="submit">Enviar</button>
                           </div>
                       </form>
                    </div>   
                </div>
            </main> 
        </div>
    )
}
export default Post