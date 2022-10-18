import { useEffect,useState } from 'react';
import './MainPageStyle.css'
import {  useLocation } from 'react-router-dom'
import axios from 'axios';
import ImageCard from '../components/ImageCard';

function MainPage(){

    const [categoriesImages, setCategoriesIamges] = useState([])
    const location = useLocation()
    const data = location.state
    const [count, setCount] = useState(10)

   

      const addNewIamges = () =>{
        setCount(count + 10)
      }

      useEffect(()=>{
        const getCategories = async () => {
            try {
                const { data: response } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${count}&page=1&category_ids=${data}`)
                setCategoriesIamges(response);
            } catch (error) {
                if (error.response) {
                    console.log('error')
                }
            }
          }
        getCategories()
      },[data,count])
      
    return(
        <>
        <div className='imageDivs' >
            {
                categoriesImages.map((item)=>{
                    return <ImageCard key={item.id} 
                    item={item.url}
                    > </ImageCard>
                })
            }
        </div>
        <div className='buttonPosition' > <button onClick={addNewIamges} className='buttonstyle' >Add new Photos</button></div>
       

        </>
    )
}

export default MainPage