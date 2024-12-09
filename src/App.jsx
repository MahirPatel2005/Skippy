import React from 'react';
import Navbar from './components/Navbar';
import './styles.css'; // Import your main styles
import img1 from './components/Images/1.png';

const App = () => {
    return (
        <div>
            <Navbar /> 
            <img src= {img1} style={{width:"100vw"}} />
            
        </div>
    );
};

export default App;
