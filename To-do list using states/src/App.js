import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [editId,setEditId]= useState(null)
  const [alert,setAlert] = useState({show:false,msg:'',type:''})


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("hello")
    if(!name){
      //display alert
      showAlert(true,'danger','please enter the value')
    }
    else if(name && isEditing){
      //edit
    }
    else{
      //show list
      showAlert(true,'success','item added to list')
      const newItem = {id:new Date().getTime().toString(),title:name};
      setList([...list,newItem]);
      setName('')
    
    }
  }

  const showAlert = (show=false,type="",msg="") =>{
    setAlert({show,type,msg})
  }

  const clearList = () =>{
    showAlert(true,'danger','empty list')
    setList([])
  }
  const removeItem = (id) =>{
    showAlert(true,'danger','item removed')
    setList(list.filter((item)=> item.id !== id))
  }

  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
    {
      alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
      <h3>Grocery List</h3>
      <div className="form-control">
        <input type="text" className='grocery' placeholder='e.g eggs' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button type="submit" className='submit-btn'>{isEditing ? 'edit': 'submit'}</button>
      </div>
    </form>
    {list.length > 0 && (
    <div className="grocery-contain er">
      <List items={list} removeItem={removeItem} />
      <button className="clear-btn" onClick={clearList}>
        clear items
      </button>
    </div>
    )}
  </section>
}

export default App