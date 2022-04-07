import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Todos() {
    const INITIAL_STATE = {
        title: '',
        text: '',
        finished: false
    }

    const dispatch = useDispatch()
    const todos = useSelector(store => store.todos)

    const [formData, setFormData] = useState(INITIAL_STATE)

    const addTodo = (formData) => {
        dispatch({
            type: 'ADD_TODO',
            payload: {
                title: formData.title,
                text: formData.text,
                finished: false
            }
        })
    }

    const removeTodo = (index) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: index
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Before addTodo')
        addTodo(formData)
        console.log('After addTodo')
        console.log(`Form Data: ${formData.title}`)
        setFormData(INITIAL_STATE)
        console.log(todos)
    }

    return (
        <div className='todosWrapper'>
            <form>
                <label 
                    htmlFor='title'>
                        Title
                </label>
                <input 
                    name='title' 
                    value={formData.title} 
                    onChange={handleChange}>
                </input>

                <label 
                    htmlFor='text'>
                        Text
                </label>
                <input 
                    name='text'
                    value={formData.text}
                    onChange={handleChange}>
                </input>

                <button 
                    onClick={handleSubmit}>
                        Submit
                </button>
            </form>

            {todos.map((todo, index) => {
                return (
                    <div 
                        className='todoWrapper' 
                        key={`${todo}.${index}`}>
                        <div 
                            className='todoTitle'>
                                {todo.title}
                        </div>
                        <div 
                            className='todoText'>
                                {todo.text}
                        </div>
                        <button onClick={removeTodo(index)}>Completed</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos