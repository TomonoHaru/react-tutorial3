import { useState } from "react";


export default function App() {
    const [src,setSrc] = useState("images/pic1.jpg");
    const[alt,setAlt] = useState("Closeup of a human eye");
    const[isDark,setIsDark] = useState(false);
    const[ButtonIsDark,setButtonIsDark] = useState("darken");
    const array = [
        {
            src:"images/pic1.jpg",
            alt:"Closeup of a human eye"
        },
        {
            src:"images/pic2.jpg",
            alt:"Rock that looks like a wave"
        },
        {
            src:"images/pic3.jpg",
            alt:"Purple and white pansies"
        },
        {
            src:"images/pic4.jpg",
            alt:"Section of wall from a pharoah's tomb"
        },
        {
            src:"images/pic5.jpg",
            alt:"Large moth on a leaf"
        }
    ]
  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={src}
          alt={alt}
        />
        <div className="overlay" 
        style={{
            background:isDark?"rgba(0,0,0,0.5)":"rgba(0,0,0,0)"
        }}>   
        </div>
        <button className="dark" onClick={()=>{
            setIsDark(!isDark)
            isDark?setButtonIsDark("darken"):setButtonIsDark("lighten")
        }}>{ButtonIsDark}</button>
      </div>
      <div className="thumb-bar">
        {
            array.map((item,i)=>{
                return (
                    <img key={i} src={item.src} alt={item.alt} 
                    onClick={()=>{
                        setSrc(item.src);
                        setAlt(item.alt);
                    }}/>
                );
            })
        }
      </div>
    </>
  );
}