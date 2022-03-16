 import React, { useState } from 'react';



 const App = () => {

  // WE HAVE TO ADD ITEM
  const [inputList, setInputList] = useState("");
  // WE HAVE TO STORE ITEM ARRAY 
  const [items, setItems] = useState([]);

  // FOR THE SHOW DATA TO THE SCREEN IF I CLICK PLUS BUTTON
  const clickShowData = () =>{
    if(!inputList){
    }else{
      setItems([...items , inputList])
      setInputList('');
    }
    };

  // DELETE SINGLE ITEM
  const DeleteItems = (id) => {
    console.log(id);
    const updateditems = items.filter((elem , index) => {
      return index !== id;
    })
    setItems(updateditems);
    }
    // REMOVE ALL DATA FROM SCREEN
    const removeAll = () =>{
      setItems([]);
    }



  return(
    <>
        
    <div className='first_container'>
    <div className='second_container'>
      <h1>ToDo List</h1>
      <p>Add Your items</p>
      <input type='text' placeholder="Add" onChange={(e) => setInputList(e.target.value)} 
      value={inputList}></input>
      <button onClick={clickShowData} className='deleteData_btn'> + </button>

    <br></br>
    <br></br>

  {

    items.map((elem, index) => {
      return (
    <div className='elements' key={index}>
                
      <h3>{elem}</h3>
      <button className='delete_btn' onClick={() => DeleteItems (index)}>Clear</button>

    <br></br>
    <br></br>


    </div>
            
 );

 })

  }
    <div className='showItem'>
        <button className='removeall_data' onClick={removeAll}>Remove All</button>

    </div>
    </div>
    </div>
         </>
  );
}
export default App;