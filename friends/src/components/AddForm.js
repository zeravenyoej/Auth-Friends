import React, { useState } from 'react';

const AddForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    });

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form>
            <input type='text' name='name' placeholder='Name' value={formValues.name} onChange={handleChange}/>
            <input type='email' name='email' placeholder='Email' value={formValues.email} onChange={handleChange}/>
            <input type='text' name='age' placeholder='Age' value={formValues.age} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add Friend</button>
        </form>
    );
};

export default AddForm;