
function IdCard({idCard}) {
    return (
        <div className="idCard">
          <img src={idCard.picture} className="idpicture" alt="idpicture"/>
          <div className="idContent">
            <p className="firstName">First name: {idCard.firstName}</p>
            <p className="lastName">Last name: {idCard.lastName}</p>
            <p className="gender">Gender: {idCard.gender}</p>
            <p className="height">Height: {idCard.height}</p>
            <p className="birth">Birth Date: {idCard.birth}</p>
          </div>
        </div>
    );
  }
  
  export default IdCard;