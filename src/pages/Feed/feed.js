import React, { useState, useEffect }  from "react";

import {Link} from 'react-router-dom';

import axios from 'axios';

import More from '../../images/more.svg';


import './Feed.css';

import HeaderMain from "../../components/HeaderMain/HeaderMain";


function Feed(){

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
            <HeaderMain />   
            <main>
                <div className="cards">
                    {posts.map((post, key)=>{
                        return(
                            <div className="card">
                                <header>
                                    <h2>{post.title}</h2>
                                    <img src={More} />
                                </header>
                                <div className="line"></div>
                                <p>{post.body}</p>   
                                <div className="btns">
                                    <div className="btn-edit">
                                        <Link to={{pathname: `/edit/${post.id}`}}>
                                            <button>Edição</button>
                                        </Link>
                                    </div>
                                    <div className="btn-ler-mais">
                                        <Link to="/lermais">
                                            <button>Ler Mais</button>
                                        </Link>
                                    </div>
                                    <div className="btn-delete">
                                        <button onClick={()=> deletePost(post.id)}>Excluir</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>   
        </div>
    )
  }
export default Feed
