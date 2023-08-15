import s from './search.module.css'
import { useDispatch } from 'react-redux';
import { searchRecipeName } from '../../Redux/actions/actions';
import { useState } from 'react';

export default function SearchBar(props) {
   const dispatch=useDispatch();
   const [value,setValue]=useState("");

   const handleChange=(e)=>{
      setValue(e.target.value)
   };
   const handleDispatch=(e)=>{
      e.preventDefault();
      //console.log(value)
      dispatch(searchRecipeName(value))
      props.handleSearch();
   };

   return (
      <div style={{display:"flex",justifyContent:"end"}}>
      <form className={`${s.content_buscador}`} onSubmit={handleDispatch}>
         <input className={`${s.buscador}`} type='search' value={value} onChange={handleChange}/>
      </form>
      </div>
   );
}