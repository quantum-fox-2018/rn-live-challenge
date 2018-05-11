const Abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const initialState = {
  touchpad:Abjad.split(''),
  randomWord:[
      'ganteng',
      'cakep',
      'tampan',
      'agrha'
  ],
  word:''
}
const reducer = (state = initialState, action)=>{
  switch (action.type) {
      case 'SET_WORD':
          return {
              ...state,
              word:action.word,
              coba:action.coba
          }
      default:
          return state
  }
}
export default reducer