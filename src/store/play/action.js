export function initial(kata) {
  return dispatch =>{
      let coba = ''
      let random = Math.floor(Math.random()*(kata.length-1))
      kata = kata.split('').map((e,i)=>{
          if(i == kata){
              coba=e
              return '_'
          }else{
              return e
          }
      })
      dispatch({
          type:'',
          word:kata.join(''),
          coba:coba
      })
  }
}