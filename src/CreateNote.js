import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{

const [expand,setExpand]=useState(false);

    const [note,setNote]=useState({
        title:'',
        content:''
    });

    const InputEvent=(event)=>{
        // const value = event.target.value;
        // const name = event.target.name;

        const {name,value}=event.target;

        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value,

                };
        });
    };

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:""
        });
    };
    const expandIt=()=>{
        setExpand(true);
    }
    const back=()=>{
        setExpand(false);
    }
    return (
    <>
    <div className='main_note'>
        <form>
        {expand?
            <input type='text' value={note.title} onChange={InputEvent} 
            name="title" placeholder="Title" onDoubleClick={back} autoComplete="off"/>:null}
           
            <textarea rows='' column='' value={note.content} onClick={expandIt} 
            onChange={InputEvent} name="content" placeholder="Write a note..."></textarea>
   { expand?
            <Button onDoubleClick={back} onClick={addEvent}><AddIcon className='plus_sign'/></Button>:null}
            
        </form>

    </div>
      </>
      );
};

export default CreateNote;




