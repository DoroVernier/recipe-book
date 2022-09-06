import Image from "next/image"; 

export default function Dessert() {
  return (
    <>
      <h2>Delicious Desserts</h2>
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
