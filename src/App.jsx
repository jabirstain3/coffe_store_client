import { useState } from 'react'
import { useLoaderData } from "react-router-dom"
import CoffeCard from "./component/coffeCard/CoffeCard";

function App() {
  // const [count, setCount] = useState(0)
  const loadedCoffes = useLoaderData();
  const [ coffes, setCoffes ] = useState( loadedCoffes );

  return (
    <div className="w-fit m-auto  ">
      <h1 className="text-center font-bold text-3xl mt-10 ">Home</h1>
        <p className="text-center font-bold text-xl mt-4">Coffee Available {coffes.length}</p>
      <div className="grid grid-cols-3 gap-8 my-10">
        {
          coffes.map(( coffe ) => <CoffeCard key={coffe._id} coffe={coffe} coffes={coffes} setCoffes={setCoffes}></CoffeCard>)
        }
      </div>
    </div>
  )
}

export default App
