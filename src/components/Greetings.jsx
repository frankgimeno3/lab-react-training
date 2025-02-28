
function Greetings({lang, children}) {

    let greeting = ""

    switch (lang) {
        case 'de': 
        greeting = "Hallo";
        break;
        case 'en': 
        greeting = "Hello";
        break;
        case 'es': 
        greeting = "Hola";
        break;
        case 'fr': 
        greeting = "Bonjour";
        break;
        default: 
        console.log("please, insert lang")
    }

    return (
        <div className="greetings">
         <p>{greeting} {children}</p>
        </div>
    );
  }
  
  export default Greetings;