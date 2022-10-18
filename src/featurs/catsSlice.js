import {getCatsCategoris} from './getCatsAPI'
import thunk from 'redux-thunk'

export function catsReducer(state={},action){
    if(action.type==="edit-cats"){
        return {
            name:action.payload.name  
        }
    }
    return state
}

export const initialCats={
    name:[
        {
            name:'svinx',
            id:2
        },
        {
            name:'murka',
            id:1
        }
    ],
    cats : []
}

export function selectCat(state){
    return state.cats.name
}

export function  editCats(cats){
    return  {
          type:'edit-cats',
          payload:{
            name:cats
          }
        }
  }
  
  export function loadCats(){
      return (dispatch)=>{
          return getCatsCategoris().then((loadedCats)=>{
              dispatch(editCats(loadedCats))
          })
      }
  }