import React, {useState, useEffect} from 'react';

interface PropsContactText {
    name: string,
    email: string,
    message: string
}

interface PropsContactErrors {
    name?: string,
    email?: string,
    message?: string
}
const Contact: React.FC = () => {
    const [text, setText]=useState<PropsContactText>({
        name: "",
        email: "",
        message: ""
    })
    const [errors, setErrors]=useState<PropsContactErrors>({})
    const [isSubmit, setIsSubmit]=useState<boolean>(false)

    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(text)
        }
    },[errors])

    const onFormSubmit=(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors(validate(text))
        setIsSubmit(true)
    }
    const onInputChange=(e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value}=e.target
        setText({
            ...text,[name]: value
        })     
    }
    const validate=(formData: PropsContactText) : PropsContactErrors => {
        const errors: PropsContactErrors={}
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
        <div className='contact-container'>
        <article className='container'>
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
        </article>
        </div>
    )
}

export default Contact