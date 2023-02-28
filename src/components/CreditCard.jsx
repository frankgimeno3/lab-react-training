import visa from '../assets/images/visa.png'
import masterCard from "../assets/images/master-card.png"

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {

  const divStyle = {
    backgroundColor : bgColor,
    color : color
  };
  return (
    <div style={divStyle} className="creditCardStyles">
      {type === "Visa" ? <img className='visapicture' src={visa} alt="visa" /> : <img src={masterCard} className="visapicture" alt="masterCard" />}      <p className="cardtype">{type}</p>
      <p className="cardnumber">{number}</p>
      <p className="expires">Expires {expirationMonth}/{expirationYear} {bank}</p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;