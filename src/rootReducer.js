const INITIAL_STATE = { memes: [], todos: [] }

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_MEME":
            {
                const newMeme = action.payload
                return {
                    ...state, 
                    memes: [...state.memes, newMeme]
                };
            }
        case "ADD_TODO":
            {
                const newTodo = action.payload
                return {
                    ...state,
                    todos: [...state.todos, newTodo]
                }
            }
        case "REMOVE_TODO":
            return {
                ...state,
                todos: state.todos.filter((index) => index !== action.payload)
            }
        default: 
            return state;
    }
}

export default rootReducer