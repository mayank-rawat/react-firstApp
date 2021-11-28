import React, {useState} from 'react'

export default function TextForms(props) {
    const [text, setText] = useState("");
    const [search, searchText] = useState("");
    const [beforSearch, afterSearch] = useState("");

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopyText = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("success","Text copied to clipboard.");

    }
    function WordCount(text){
        let i = 0;
        let count = 0;
        while(i < text.length){
            if(text.charAt(i) === ' ' && text.charAt(i+1) !== ' '){
                count++;
            }  
            i++;  
        }
        return count;
    }
    const searchWord = ()=>{
        let pos = 0;
        while(pos < text.length){
            if(search.charAt(0) === text.charAt(pos)){
                let found = true;
                let i = 0;
                let temp = pos;
                while(i < search.length){
                    if(search.charAt(i) !== text.charAt(temp)){
                        afterSearch(search + " not found.");
                        found = false;
                        break;
                    }
                    i++;
                    temp++;
                }
                if(found){
                    afterSearch(search + " found at position " + pos);
                    break;
                }
                    
            }
            pos++;
        }
        
    }
    const searchOnChange = (event)=>{
        searchText(event.target.value);
    }
    return (
        <>
        <div style = {{color:props.mode ==='dark'? 'white':'rgb(24 39 57)'}}>
            <div className = "container">
                <div className = 'my-3'></div>
                <h1>{props.heading}</h1>
                <div className = "mb-3">
                    <textarea className = "form-control" style = {{backgroundColor : props.mode ==='dark'? 'rgb(24 39 57)':'white', 
                    color:props.mode ==='dark'? 'white':'rgb(24 39 57)'}} value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder = "Enter text here"></textarea>
                    <div className = 'my-2 d-flex'>
                        <button className = "btn btn-primary" onClick = {handleUpclick}>Convert to Uppercase</button>
                        <button className = "btn btn-primary mx-2" onClick = {handleLoclick}>Convert to Lowercase</button>
                        <button className = "btn btn-primary mx-2" onClick = {handleCopyText}>Copy Text</button>
                        <input className="form-control me-2" type="search" value={search} onChange = {searchOnChange} placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type = "submit" onClick = {searchWord}>Search</button>
                    </div>
                    <p itemID = "search">{beforSearch}</p>
                </div>
            </div>
            <div className = "container">
                <h2>Your text summary</h2>
                <p>{WordCount(text)} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{(text.length === 0)? "Enter text to preview." : text}</p>
            </div>
        </div>
        </>
    )
}
