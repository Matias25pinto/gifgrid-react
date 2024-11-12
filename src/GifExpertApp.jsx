import { useState } from 'react'
import { AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    const addCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; 
        setCategories([...categories, newCategory]);
    };
   return <>
        <h1>GifExperApp</h1>
        <AddCategory onNewCategory = {event => addCategory(event)} ></AddCategory>
            { categories.map( category => {
                return (
                   <GifGrid key={category} category = {category}></GifGrid>
                )
            }) }
    </>

}