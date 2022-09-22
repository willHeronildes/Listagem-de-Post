import React from "react";

import {Link} from 'react-router-dom';


import '../HeaderMain/HeaderMain.css';


function HeaderMain(){
    return(
       <header>
           <div className="container">
               <div className="Logo">
                   <h1>ListPost</h1>
               </div>
               <div className="btn-NovoPost">
                    <Link to="/post">
                        <button>Adicionar um Novo Post</button>
                    </Link>
               </div>
           </div>
       </header>
    )
}

export default HeaderMain