import axios from "axios";
export async function getCatsCategoris(){
        try {
            const data =  await axios.get('https://api.thecatapi.com/v1/categories').then(res => res.data)
            return data
          } catch (error) {
            if (error.response) {
              console.log('error')
            }
          }
    
}