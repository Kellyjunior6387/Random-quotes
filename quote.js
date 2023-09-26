//const { useState } = require("react");

function Quotebox (props) {
     const [quote,setQuote]= React.useState("Tommorow is never promised")
     const [author,setAuthor] = React.useState("Kelvin")
    //Function to change a color on reload
    let generateRandomColor = () => {
        const r = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        return `rgb(${r},${b},${g})`
}
     //Function to get a new quote
     const newQuote = () =>{
        let randomNumber = Math.floor(Math.random() * 16);
        const randomColor = generateRandomColor()
            fetch("https://type.fit/api/quotes")
           .then(function(response) {
               return response.json();
               })
             .then(function(data) {
                setQuote(data[randomNumber]["text"])
                setAuthor(data[randomNumber]["author"])
                console.log(data[1])
                });
                document.documentElement.style.setProperty('--background-color',randomColor)
                
                     
        } 

    
    return(
    <div id="quote-box">
        <div id="text">
            <i className="fa fa-quote-left">
                <span>
                     { quote}
                </span>
            </i> 
        </div>
        <div id="author">
          <p>-{author}</p>
        </div>
        <div id="buttons" >
        <button id="new-quote" className="button" onClick={newQuote}>New-quote</button>
        <a id="tweet-quote" className="button" href="https://twitter.com/intent/tweet" title="Tweet this quote"
        target="_top">
        <i className="fa fa-twitter"></i></a>
    </div>
    </div>
    );
}
ReactDOM.render(
    <Quotebox category="dating"/>, document.getElementById('app')
)
