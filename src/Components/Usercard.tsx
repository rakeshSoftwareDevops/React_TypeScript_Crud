import React from 'react';
import { useState } from 'react';
import { isPropertySignature } from 'typescript';
import { UserDataObject} from '../App';
import '../App.css';

import logo from './logo.svg';


type props={
     userDataArray:UserDataObject[],
     callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
     callbackForEdit: (e: React.MouseEvent<HTMLButtonElement>) => void

}


const Usercard: React.FC<props>=({userDataArray,callback,callbackForEdit}) =>{
    const getSampleData=(key:number)=>{
      console.log('go Here');
    }
    const [currentId, setId] = useState(0);  

 
    return(
      (userDataArray.length===0)?(<div>{null}</div>):(
      <div>
        <div className='form'>
            {userDataArray.map(data => (
           <p key={data.id}>
             Name:{data.name}
             <br/>
             <br/>
             Address:{data.address}
             <br/>
             <br/>
             City:{data.city}
             <br/>
             <br/>
             <button value={data.id} onClick={callbackForEdit}>Edit</button>
             <button value={data.id} onClick={callback}>Delete</button>
             </p>)
             
 
             )} 
            
          
    
       </div>
     </div>
     )
    
      
      );
    
  
  }
      
    

   


  

export default Usercard;
