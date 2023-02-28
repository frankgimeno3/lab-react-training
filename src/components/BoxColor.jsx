function BoxColor({r, g, b}) {

    const rgbCodeInput = r + g + b; 
   
    const divStyle = {
        backgroundColor: 'rgb('+r+','+g+','+b+')',
      };


    return (
        <div className="colorbox">
          <div style={divStyle}> rgb( {rgbCodeInput} )</div>
        </div>
    );
  }
  
  export default BoxColor;