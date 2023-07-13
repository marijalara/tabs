import React, {useEffect, useState} from 'react';

const Contact = () => {
    const [text, setText]=useState({
        name: "",
        email: "",
        message: ""
    })
    const [errors, setErrors]=useState({})
    const [isSubmit, setIsSubmit]=useState(false)

    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(text)
        }
    },[errors])

    const onFormSubmit=(e) => {
        e.preventDefault()
        setErrors(validate(text))
        setIsSubmit(true)
    }
    const onInputChange=(e) => {
        const {name,value}=e.target
        setText({
            ...text,[name]: value
        })     
    }
    const validate=() => {
        const errors={}
        if(!text.name) {
            errors.name="You must enter a name"
        } 
        if(!text.email) {
            errors.email="You must enter a email"
        } 
        if(!text.message) {
            errors.message="You must enter a message"
        }
        return errors
    }
    return (
        <div className='container'>
            <h4>get in touch</h4>
            {Object.keys(errors).length===0 && isSubmit ? <div className="submit">Success! Thank you!</div> : null}
            <form className='form' onSubmit={onFormSubmit}>
                <input 
                    type='text' 
                    placeholder='NAME'
                    value={text.name}
                    name='name'
                    onChange={onInputChange}
                />
                <p>{errors.name}</p>
                <input 
                    type='text' 
                    placeholder='EMAIL'
                    value={text.email}
                    name='email'
                    onChange={onInputChange}
                />
                <p>{errors.email}</p>
                <input 
                    type='text' 
                    placeholder='MESSAGE'
                    value={text.message}
                    name='message'
                    onChange={onInputChange}
                />
                <p>{errors.message}</p>
                <button className='button1'>submit here</button>
            </form>
        </div>
    )
}

export default Contact