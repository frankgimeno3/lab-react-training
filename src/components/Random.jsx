
function Random({min, max}) {

    let randomInteger = Math.floor(Math.random() * max) + min;

    return (
        <div className="random">
          <p>Randmon number: {randomInteger}</p>
        </div>
    );
  }
  
  export default Random;