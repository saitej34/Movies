import React from 'react'
import './App.css';
const Home = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark navbar-fixed-top">
        <div class="container">
           <a href="#" class="navbar-brand text-success"> <b>Movies App</b></a>
           <button class="navbar-toggler" 
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
           >
           <span class="navbar-toggler-icon"></span>
        </button>
           <div class="collapse navbar-collapse" id="navmenu">
               <ul class="navbar-nav ms-auto">
                   <li class="nav-item">
                    <a href="/" class="nav-link activ">Home</a>
                   </li>
                   <li class="nav-item">
                    <a href="/movies" class="nav-link activ">Get Movie Details</a>
                   </li>
                   <li class="nav-item">
                    <a href="/contact" class="nav-link activ">Contact</a>
                   </li>
               </ul>
           </div>
        </div>
    </nav>
      <div class="container c"> 
         
         <div class="text-success text-center ">
             <br/>
             <h2>Movies Database</h2>
             <hr class="color-success" />
             <p class="text-dark">This Web gets you the Information Regarding the Movies the name,Director,Language and poster.</p>
             <a href="/movies" class="btn btn-outline-success">Get Movies Data</a>
             <br/><br/>
         </div>
      </div>
    </div>
  )
}

export default Home
