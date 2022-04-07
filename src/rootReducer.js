const INITIAL_STATE = { memes: [], todos: [] }

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_MEME":
            {
                const newMeme = action.payload
                return {
                    memes: [...state.memes, newMeme]
                };
            }
        case "ADD_TODO":
            {
                const newTodo = action.payload
                return {
                    todos: [...state.todos, newTodo]
                }
            }
        case "REMOVE_TODO":
            return {
                memes: [...state.memes],
                todos: state.todos.filter((index) => index !== action.payload)
            }
        default: return state;
    }
}

export default rootReducer