import Image from "next/image"; 

import styled from "styled-components";

export default function Dessert() {
  return (
    <>
      <Subtitle>Delicious Desserts</Subtitle>
      <p>Here, you can find recepies for the perfect ending of an exquisite meal!</p>
      <Image 
      alt=""
      src="https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
      layout="responsive"
      width="2400"
      height="1599"
    />
      </>
  );
}

const Subtitle = styled.h2`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
font-size: 1.5rem; 
`
