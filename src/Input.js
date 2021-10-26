import React,{useState} from "react";
export default function Input() {
    const [his,setHis]=useState([]);
    const [input,setInput]=useState("")
    function handleChange(event){
        let text=event.target.value;
        setInput(text)
        console.log(text)
       
    }
    function handleClick(){
        setHis((prevValue)=>{
            return [input,...prevValue];
            
        })
        console.log(his)
        

    }
    function handleSubmit(e){
        e.preventDefault();
        
    }

    

   return(
       
          <div>
          <form action="" onSubmit={handleSubmit}>
          <input type="text" onClick={handleClick} onChange={handleChange}/>
          <ul>
          {
            his.map((item)=>{
                return <li>{item}</li>
            })
              
          }
          </ul>
          

          </form>
          </div>
       
    )
    
};
