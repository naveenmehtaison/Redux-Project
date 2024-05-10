const redux = require('redux')

const ReducerFunc = (state={counter:0},action)=>{
    switch (action.type) {
        case 'increament':
            return { counter: state.counter + 1 };
        case 'decreament':
            return { counter: state.counter -1 };



    }
}
const counterSubscriber=()=>{
    const latestState= store.getState()
    console.log(latestState)
}
const store = redux.createStore(ReducerFunc)
store.subscribe(counterSubscriber)
store.dispatch({type:'increament'})
store.dispatch({type:'increament'})
store.dispatch({type:'increament'})
store.dispatch({type:'increament'})
store.dispatch({type:'increament'})
store.dispatch({type:'increament'})
store.dispatch({type:'decreament'})
