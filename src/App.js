import './App.css';
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";

const idArray = [{
  IdCard: 266789876,
  lastName:'Cena',
  firstName:'John',
  gender:'male',
  height:178,
  birth:"1980-07-14",
  picture:"https://phantom-marca.unidadeditorial.es/8282d52f4aa22fde9df400211365fbb3/resize/1320/f/jpg/assets/multimedia/imagenes/2023/02/05/16755519728234.jpg",
},
{
  IdCard: 266789876,
  lastName:'Simpson ',
  firstName:'Marge',
  gender:'female',
  height:172,
  birth:"1988-05-11",
  picture:"https://media.npr.org/assets/img/2013/05/07/ap0908140151727_vert-06dfa531201681c1ebe2d126471494fdeb5048ae-s1100-c50.jpg",
}]

function App() {
  return (
    <div className="App">
      <IdCard idCard={idArray[0]}/>
      <IdCard idCard={idArray[1]}/>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <div className="cardsSection"> 
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
      </div>
      <hr/>
      <Rating/>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <hr/>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
    </div>
  );
}

export default App;
