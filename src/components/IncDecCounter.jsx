import {useState} from "react";
import React from "react";
function IncDecCounter({tData, items, itemId,setTData}){
  const [num,setNum]=useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    items.map(data=>data._id===itemId?setTData({...tData,quantity:num})
    :data)
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
          items.map(data=>data._id===itemId?setTData({...tData,quantity:num})
          :data)
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
 
  }

   return(
    <>
    <div id="counter">
    <div class="input-group">
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
  </div>
  <input type="text" class="form-control" value={num} onChange={handleChange}/>
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
   </>
  );
}

export default IncDecCounter;