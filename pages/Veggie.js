import Image from 'next/image'; 
import pizza from '../public/pizza.jpg';


export default function Dessert() {
  return (
    <>
      <h2>Dishes</h2>
      <p>Here, you can find recepies perfect ending for a delicious meal</p>
      <Image 
      alt=""
      src={pizza}
      layout="responsive"
      width={2400}
    height={1599} />
    </>
  );
}