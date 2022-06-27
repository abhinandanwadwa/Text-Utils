import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase Button Was Clicked!!");

        let newText = text.toUpperCase();
        
        setText(newText);

        // props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase Button Was Clicked!!");

        let newText = text.toLowerCase();

        setText(newText);
    }

    const handleCopyText = () => {
        // console.log("Uppercase Button Was Clicked!!");

        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        if(text!==""){
            props.showAlert("Copied to Clipboard", "success");
        }
        else{
            props.showAlert("Please write something in the box to copy", "danger");
        }
    }

    const handleClearText = () => {
        // console.log("Uppercase Button Was Clicked!!");

        let newText = "";

        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("Onchange Button Was Clicked!!")
        setText(event.target.value);
    }

    function wordlength(){
        var wordarr = text.split(" ");
        if(wordarr[wordarr.length - 1] === ""){
            return wordarr.length-1;
        }
        else{
            return wordarr.length
        }
    }

    const [text, setText] = useState('')
    // setText("Hello")

  return (
    <>
    <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'#4b4b4b', color: props.mode === 'light'?'black':'white'}} onChange={handleOnChange}  value={text} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase hi</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'?'black':'white', caretColor: 'red'}}>
        <h2>Your Text Summary</h2>
        <p>{wordlength()} words and {text.length} characters</p>
        <p>{0.008 * wordlength()} Minutes Read</p>
        <h2>Preview</h2>
        <strong style={{opacity: text === ''?'0.5':'1'}}>{text === ''?'Enter something to preview it here....':text}</strong>
    </div>
    </>
  )
}
