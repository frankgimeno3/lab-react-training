function DriverCard({name, rating, img, car:{model, licensePlate}}) {
    return (
    <div class="drivercard">
      <img className='idpicture' src={img} alt="cardpicture" /> 
      <p>{name}</p>
      <p className="card-text">
        {rating <= 2 && <p><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p> }
        {rating > 2 && rating <= 4 && <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p> }
        {rating > 4 && rating <= 6 && <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p> }
        {rating > 6 && rating <= 8 && <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p> }
        {rating > 8 && <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p> }
      </p>
      <p>{model} - {licensePlate}</p>
      
    </div>
    );
  }
  
  export default DriverCard;