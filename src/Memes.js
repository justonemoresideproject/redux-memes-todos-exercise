import './Memes.css'

import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Memes() {
    const INITIAL_STATE = {
        topText: '', 
        bottomText: '', 
        image: ''
    }
    
    const dispatch = useDispatch()
    const memes = useSelector(store => store.memes)
    
    const [formData, setFormData] = useState(INITIAL_STATE)
    
    const addMeme = (formData) => {
        dispatch({ 
            type: 'ADD_MEME',
            payload: {
                topText: formData.topText,
                bottomText: formData.bottomText,
                image: formData.image
            }
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
        addMeme(formData)
        setFormData(INITIAL_STATE)
        console.log(memes)
    }
    
    return (
        <div className='memesWrapper'>
            <form>
                <label 
                    htmlFor='topText'>
                        Top Text
                </label>
                <input 
                    name='topText' 
                    value={formData.topText} onChange={handleChange}>
                </input>
            
                <label 
                    htmlFor='bottomText'>
                        Bottom Text
                </label>
                <input 
                    name='bottomText' 
                    value={formData.bottomText} 
                    onChange={handleChange}>
                </input>
            
                <label 
                    htmlFor='image'>
                        Image
                </label>
                <input 
                    type='text' 
                    name='image' 
                    value={formData.image} 
                    onChange={handleChange}>
                </input>

                <button 
                    onClick={handleSubmit}>
                        Add Meme
                </button>
            </form>
            {memes.map((meme, index) => {
                return (
                    <div 
                        className='memeWrapper' 
                        style={{backgroundImage: meme.image}}>
                        <div 
                            className='topText'>
                                {meme.topText}
                        </div>
                        <div 
                            className='bottomText'>
                                {meme.bottomText}
                        </div>
                    </div>
                )})
            }
        </div>)
}

export default Memes