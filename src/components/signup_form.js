import React, { useState } from 'react';

function SignUpForm() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleSubmit = (e) => {
        console.log('submit');
        const formEle = document.querySelector('form');
        const formData = new FormData(formEle)
        formEle.style.display = "none";
        document.querySelector('h1').style.display = "none";
        toggleVisibility();

        e.preventDefault();
        fetch("https://script.google.com/macros/s/AKfycbzbO4UYwuRxBnW58rNzwKdzga9z88hogK2VS6SisYTNdPjmEfmMAd4qz2Dxape3Drnw/exec", {
            method: "POST",
            body: formData
        })
    };

    return (
    <div className='flex flex-col place-items-center w-full md:w-[30%] mt-[-2%] md:mt-0'>
        <h1 className='text-[5.5vw] md:text-[1.9vw] text-center text-white mb-[7%] '>Sign up for your <br></br>Free Consultation</h1>
        <form onSubmit={handleSubmit} className='form flex flex-col space-y-5 w-[80%]'>
            <input className ="bg-orange-300 bg-opacity-50 rounded placeholder-white placeholder-opacity-75" placeholder='First Name' type="text" id="firstname"
                name="FirstName" required/>
            
            <input className ="bg-orange-300 bg-opacity-50 rounded placeholder-white placeholder-opacity-75" placeholder='Last Name' type="text" id="lastname" name="LastName" required/>

            <input className ="bg-orange-300 bg-opacity-50 rounded placeholder-white placeholder-opacity-75" placeholder='Phone Number' type="text" id="phone" name="PhoneNumber" required/>

            <input className ="bg-orange-300 bg-opacity-50 rounded placeholder-white placeholder-opacity-75" placeholder='Email' type="email" id="email" name="Email" required />
            
            <input className='button w-1/3 place-self-center text-white bg-[#E67229] hover:bg-[#9B4813] 
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2focus:outline-none' 
            type='submit'></input>

        </form>
        {isVisible &&
            (<div className='flex text-white text-center text-[5.5vw] md:text-[1.9vw] w-[80%] mt-[15%] md:mt-[25%]'>Thank You<br/>You will be contacted within 24 hours via email</div>)
        }
    </div>
    );
}

export default SignUpForm;
