import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import Sidebar from './Sidebar';

const App=()=>{
      
  const [addItem,setAddItem]=useState([]);

  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return [...prevData,note];
    });

  };

  const onDelete=(id)=>{
    setAddItem((olddata)=>
    olddata.filter((currentdata,index)=>{
      return index!==id;    })
    )
  };

  return <>

  <h1>
  
 <Header/>
 <Sidebar/>
 
 <CreateNote passNote={addNote}/>
 


    {  addItem.map((val,index)=>{
         return <Note
          key={index}
           id={index}
         title={val.title}
         content={val.content}
         deleteItem={onDelete}
   />
 })
    }

 <br/>
 <Footer/>

  </h1>
  </>;
}
export default App;


