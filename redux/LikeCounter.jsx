import { createStore } from "redux";
import reducer from "./Reducer";
import { increaseNumber } from "./Action";
import { decreaseNumber } from "./Action";
import { useState } from "react";



const store=createStore(reducer)
export default function likeCounter(){
   

    const[state,setState]=useState(0)
    store.subscribe(()=>setState(store.getState().count))
   return (
    <div>
    <h3>{state}</h3>
    <button onClick={()=>store.dispatch(increaseNumber())}>+</button>
    <button onClick={()=>store.dispatch(decreaseNumber())}>-</button>
    </div>
    )
}