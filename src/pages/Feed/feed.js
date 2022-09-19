import React from "react";

import {Link} from 'react-router-dom';

import More from '../../images/more.svg';

import './Feed.css';

import HeaderMain from "../../components/HeaderMain/HeaderMain";

function Feed(){
    return( 
        <div>
            <HeaderMain />   
            <main>
                <div className="cards">
                    <div className="card">
                        <header>
                            <h2>Curso Consumindo Api</h2>
                            <img src={More} />
                        </header>
                        <div className="line"></div>
                        <p>Nesse curso eu ensino vcs a consumirem uma api, com react.js, uma api</p>
                        
                        <div className="btns">
                             <div className="btn-edit">
                                 <Link to="/edit">
                                    <button>Edição</button>
                                 </Link>
                             </div>
                             <div className="btn-ler-mais">
                                 <Link to="/lermais">
                                    <button>Ler Mais</button>
                                 </Link>
                             </div>
                             <div className="btn-delete">
                                 <button>Excluir</button>
                             </div>
                        </div>
                    </div>
                </div>
            </main>   
        </div>
    )
}
export default Feed