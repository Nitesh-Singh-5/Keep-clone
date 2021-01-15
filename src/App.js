import React , { useState } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';
import Note from './components/Note';

function App() {

  const [addItem,setItem] = useState([]);
  
  const addNote = (note)=>{
    // alert("clicked")
    setItem((preValue)=>{
      return [...preValue,note];
  });
  console.log(note)
};
const onDelete = (id) =>{
  setItem((oldData)=>
    oldData.filter((currentdata,index)=>{
      return index !== id;
    })
  )
}
  return (
    <div>
      <Header/>
      <CreateNote passNote={addNote}/>
      
      {addItem.map((val,index)=>{
        return ( <Note key={index}
        id = {index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete} />
        );
      })}

      <Footer/>
    </div>
  );
}

export default App;
