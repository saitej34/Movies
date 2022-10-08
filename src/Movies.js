import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react'
import './App.css';
const Movies = () => {
  const [scroll,setscroll] = useState('');
  const [name,setname]=useState("");
  const [title,settitle] = useState("");
  const [year,sety] = useState();
  const [rel,setrel] = useState();
  const [run,setrun] = useState();
  const [gen,setgen] = useState("");
  const [dir,setdir] = useState();
  const [ac,setac] = useState();
  const [intr,setintr] = useState();
  const [lang,setl] = useState("");
  const [imgs,setimgs] = useState("");
  const sub = (e)=>{
      e.preventDefault();
      let link = "https://omdbapi.com/?t="+name+"&apikey=c78eba61";
      fetch(link).then(
        response => response.json()
      ).then(
         data =>{
          if(data.Response=="True")
          {
              setscroll("");
              settitle("Movie Name   :" + data.Title);
              setrel("Released Date: :" + data.Released);
              sety("Year             :" + data.Year);
              setrun("Movie Runtime  :" + data.Runtime); 
              setgen("Genre          :" + data.Genre);
              setdir("Director       :" +data.Director);
              setac("Actors          :" + data.Actors);
              setintr("Description   :" +data.Plot);
              setl("Language         :" +data.Language);
              setimgs(data.Poster);
          }
          else if(data.Response=="False")
          {
            alert("Enter Correct Movie Name");
          }
         }
      ).catch(
        err => console.log(err)
      )

  }
  return (
    <div>
      <br/>
           <br/>
      <div class="container d-flex justify-content-center">
          <input type="text" class="text-center v" placeholder="Movie Name" onChange={(e)=>{setname(e.target.value);setscroll("Searcing for Data")}} />
          <a href="#" onClick={sub} class="btn btn-success">Get Data</a>
      </div>
      <br/><br/>
      <div class="container r bg-dark text-success" >
           <div class="row">
               <marquee><h5>{scroll}</h5></marquee>
               <div class="col-md-6 text-center orange">
                  <br/>
                  <h4>{title} </h4> 
                  <h5>{year} </h5> 
                  <h5>{rel} </h5> 
                  <h5>{ac} </h5>
                  <h5>{run} </h5> 
                  <h5>{gen} </h5> 
                  <h5>{dir} </h5>  
                  <h5>{intr} </h5> 
                  <h5>{lang} </h5> 
                   
               </div>
               <div class="col-md-6 blue text-center">
                  <img src={imgs} class="img-responsive img-fluid" />
               </div>

           </div>
      </div>
    </div>
  )
}

export default Movies
