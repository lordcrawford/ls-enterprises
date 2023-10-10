import './home.css';
import SignUpForm from './signup_form.js';

const Home = () => {

    return (
        <div id="home" className="h-screen w-screen">
            <img id="logo" className ="h-[25%] md:h-[30%] m-auto" src={require('../logo.jpg')} 
            alt="Liandry Suarez Enterprises Logo"/>
            <div className='flex flex-col md:flex-row'>
                <p className="mt-0 md:mt-[8%] text-center text-[4.3vw] md:text-left md:text-[2.5vw] text-white ml-[12%] mr-[10%] italic mt-[-5%] md:mb-0 mb-[10%]">Let us help 
                you get one step closer <br/>to being debt free</p>
                <SignUpForm/>
            </div>
            
        </div>
    )
}

export default Home