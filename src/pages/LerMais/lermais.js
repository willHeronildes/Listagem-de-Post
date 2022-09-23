import React, { useState, useEffect }  from "react";

import {Link} from 'react-router-dom';

import axios from 'axios';

import Header from "../../components/header/Header";

function LerMais(){
   const [posts, setPosts] = useState([])

        useEffect(() => {
        axios.get("https://632b49341aabd8373983a99a.mockapi.io/Posts")
        .then((response)=>{
            setPosts(response.data);
        })

        .catch(()=>{
            console.log("Deus errado")
        })
        }, [])

    function deletePost(id){
        if(window.confirm("Deseja Realmente excluir o post?")){

            axios.delete(`https://632b49341aabd8373983a99a.mockapi.io/Posts/${id}`)
            setPosts(posts.filter(post => post.id !== id))
        }
        }
    return(
        <div>
           <Header/>
           <main>
                <div className="cards">
                    {posts.map((post, key)=>{
                        return(
                    <div className="card">
                        <header>
                            <h2>Usuario: {post.usuario}</h2>
                        </header>
                        <header>
                            <h2>{post.title}</h2>
                        </header>
                        <div className="line"></div>
                        <p>
                            {post.body}
                        </p>
                    </div>
                       )
                    })}
                </div>
            </main>
        </div>
    )
}
export default LerMais