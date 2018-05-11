export function setWord(target) {
  return dispatch => {
      let word = ''
      let random = Math.floor(Math.random()*(target.length-1))
      target = target.split('').map((e,i)=>{
          if(i == target){
              word=e
              return '_'
          }else{
              return e
          }
      })
      dispatch({
          type:'SET_WORD',
          word:target.join(''),
          word:word
      })
  }
}