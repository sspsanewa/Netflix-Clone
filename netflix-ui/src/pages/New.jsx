import React from 'react'
import styled from 'styled-components'
import Smoke from '../assets/smoke.mp4'


const New = () => {

  return (
    <Container>
        
        <section>
      
        <video
              src={Smoke}
              autoPlay={true}
              loop
            />
        <h1>
            <span>A</span>
            <span>B</span>
            <span>H</span>
            <span>I</span>
            <span>S</span>
            <span>H</span>
            <span>E</span>
            <span>K</span>
        </h1>
    </section>
  
    </Container>
  )
}

export default New


const Container = styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

video{
    object-fit: cover;
}

section{
    background:#000 ;
}

h1{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    letter-spacing: 1rem;
    text-transform: uppercase;
    color: #f5f5f5;
    font-size: 5em;
    font-family: sans-serif;
}

h1 span{
    display: inline-block;
    animation: animate 1s  ease-in-out;

}

@keyframes animate{
    0%{
        opacity: 0%;
        transform: rotateY(90deg);
        filter: blur(10px);
    }
    100%{
        opacity: 1;
        transform: rotateY(0deg);
        filter: blur(0px);
}
}
h1 span:nth-child(1)
{
    animation-delay: 0.6s;
}
h1 span:nth-child(2)
{
    animation-delay: 1s;
}
h1 span:nth-child(3)
{
    animation-delay: 1.7s;
}
h1 span:nth-child(4)
{
    animation-delay: 2.3s;
}
h1 span:nth-child(5)
{
    animation-delay: 2.7s;
}
h1 span:nth-child(6)
{
    animation-delay: 3.2s;
}
h1 span:nth-child(7)
{
    animation-delay: 3.7s;
}
h1 span:nth-child(8)
{
    animation-delay: 4s;
}

`

