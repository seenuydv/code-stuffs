import { useState } from 'react';
import React from 'react';
import { Container,Button } from 'react-bootstrap';


function Box() {
    const [boxcolor, setBoxcolor] = useState('0');

    const ClickChangeColor = () => {
            const color = ['red', 'yellow', 'green', 'pink', 'purple', 'blue'];
            const newColor = color[Math.floor(Math.random() * color.length)];
            setBoxcolor(newColor);
        };
    
        return (
            <>
                <Container>
                   <Button variant='outline-primary' onClick={ClickChangeColor}  style={{ backgroundColor: boxcolor, width: '200px', height: '200px',}}></Button>
                   
                </Container>
            
            </>
        );

}

export default Box;