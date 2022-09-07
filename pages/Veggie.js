import Image from 'next/image'; 
import pizza from '../public/pizza.jpg';
import styled from "styled-components";



export default function Dessert() {
  return (
    <>
      <Subtitle>Dishes</Subtitle>
      <p>Easy, healthy and delicious!</p>
      <Image 
      alt=""
      src={pizza}
      layout="responsive"
      width={2400}
      height={1599} />
    </>
  );
}

const Subtitle = styled.h2`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
font-size: 1.5rem; 
`
