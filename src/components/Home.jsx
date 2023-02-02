import React from 'react';
import '../assets/css/Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container-home'>
            <h1>Text-Analysis</h1>
            <div className='buttonDiv'>
                <Link Link to="/summarize" className='link'>
                    <button className='button'>Summarize a Text</button>
                    <div className='svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={30} height={30} ><path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"/></svg>
                    </div>
                </Link>
            </div>
            <div className='buttonDiv'>
                <Link Link to="/article-extraction" className='link'>
                    <button className='button'>Extract an Article</button>
                    <div className='svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={30} height={30} ><path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"/></svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home