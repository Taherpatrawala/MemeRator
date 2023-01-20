
// import memesData from "./memesData";
import React from "react";



let Body=()=>{
 const [memeImage,setImage]= React.useState({
  topText:"",
  bottomText:"",
  url:""
 });

 let getMeme=()=>{
 
  //let memes= memesData.data.memes;
  let randomNumber= Math.floor(Math.random()*100);
  //let memeObject=memes[randomNumber];
   // setImage(prevMeme=>{return { ...prevMeme,url:memeObject.url}});

    React.useEffect( 
      fetch("https://api.imgflip.com/get_memes")
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setImage(prevMeme=>{return { ...prevMeme,
                                     url:data.data.memes[randomNumber].url}});
      })
      )
   
}

let handleChange=(event)=>{
  const {name,value}=event.target;  //here we are using destructuring to get the name and value of the input field

  return setImage(prevState=>{
    return {
      ...prevState,
       [name]:value //here name is computed property it means it will take the name of the input field and set the value of that input field  
    }
  })
}



   return (
      <div className="body-parent">
        <div className="search-inputs">
            <input className="input1" onChange={handleChange} name="topText" value={memeImage.topText}/>
             <input className="input2" onChange={handleChange} name="bottomText" value={memeImage.bottomText}/>
           </div>

           <div className="button-div"><button className="button1" onClick={getMeme}>Generate Meme</button></div>
         
        <div className="Meme-div"> <img src={memeImage.url} className="meme-image"></img>
         <h1 className="topText">{memeImage.topText}</h1>
          <h1 className="bottomText">{memeImage.bottomText}</h1></div>
      </div>
    )
}

export default Body;