import React from 'react';
import { useState , useRef} from 'react';
import logo from './logo.svg';
import Usercard from './Components/Usercard';
import './App.css';
import { readFileSync } from 'fs';

export type UserDataObject={
  id:number;
  name: string;
  address: string;
  city: string;

}


const App: React.FC = () =>{
  const [userData, setUserData] = useState<UserDataObject[]>([]);
  const [count, setCount] = useState(0);
  const[idForUpdate,setUpdateId]=useState(0);  
  const [name, setName] = useState('');  
  const [city, setCity] = useState('');  
  const [address, setAddress] = useState('');  


  const nameref = React.useRef(null);
  var  userDataArray:UserDataObject[];
  var  Inputname:string;
  var  Inputcity:string;
  var  Inputaddress:string;
  var  currentId:number;
  var  GetId:number;


  
  const getInputData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCount(count + 1);
    const userDataObjectPush = {
      id:count,
      name:name,
      city:city,
      address:address
    };
    setUserData([...userData,userDataObjectPush]);
    setName('');
    setCity('');
    setAddress('');


    
  };
  const deleteCartData=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    const currentId = e.currentTarget.value;
    var currentIdNumber: number = +currentId;

    setUserData(userData.filter(user => user.id != currentIdNumber));
    setName('');
    setCity('');
    setAddress('');

    


  }
  const editSaveData=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    var userDataCopy=[...userData];        

    //setUserData(userData.filter(user => user.id !== idForUpdate));

     if(userDataCopy.length>0)
     {
      for(var i=0;i<userDataCopy.length;i++)
      {
          if(userDataCopy[i].id===idForUpdate)
          {
            userDataCopy[i].name=name;
            userDataCopy[i].city=city;
            userDataCopy[i].address=address;


            const userDataObjectPush2 = {
              id:idForUpdate,
              name:name,
              city:city,
              address:address
            };
            console.log(userData[i].name);
            setUserData(userDataCopy);

  
          }
      }
     }
     else{
       alert("No Data present to Edit");
     }     


  }
  const editCartData=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    const currentId = e.currentTarget.value;
    var currentIdNumber: number = +currentId;
    console.log(currentIdNumber);
    for(var i=0;i<userData.length;i++)
    {
        if(userData[i].id===currentIdNumber)
        {
          setName(userData[i].name);
          setCity(userData[i].address);
          setAddress(userData[i].city);
          setUpdateId(currentIdNumber);

        }
    }
    console.log(idForUpdate);
  


  }
  const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
     Inputname = e.currentTarget.value;
     setName(Inputname);
    
    

  };

  const handleCityChange = (e:React.ChangeEvent<HTMLInputElement>) => {
     Inputcity = e.currentTarget.value;
     setCity(Inputcity);

    
  };

  const handleAddressChange = (e:any) => {
    Inputaddress = e.currentTarget.value;
    setAddress(Inputaddress);
    
  };


  return (
    <div>
    <div className="form">
      <h1>USER CART</h1>
      <input type="text" className="name formEntry" ref={nameref} name="InputName" placeholder="Name" value={name} onChange={handleNameChange} />
      <input type="text" className="city formEntry" placeholder="City" name="InputCity" value={city} onChange={handleCityChange}/>
      <textarea className="address formEntry" placeholder="Address" name="InputAddress" value={address} onChange={handleAddressChange}></textarea>
      <button className="submit formEntry" onClick={getInputData}>Submit</button>
      <button className="submit formEntry" onClick={editSaveData}>EditAndSave</button>

    </div>
      <Usercard
        userDataArray={userData}
        callback={(props) => deleteCartData(props)}
        callbackForEdit={editCartData}
      />
    </div>
  );
}

export default App;
