import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
    const loadedCoffe = useLoaderData();
    const [ coffe, setCoffe ] = useState( loadedCoffe )

    const { _id, name, catagory, details, quantity} = coffe;
    const hadleUpdateCoffe = (e) =>{
        e.preventDefault();

        const form = e.target;

        const name = form.coffe_name.value;
        const catagory = form.catagory.value;
        const details = form.details.value;
        const quantity = form.quantity.value;
        const updatedCoffe = {name, catagory, details, quantity};
        // console.log( updatedCoffe );

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify( updatedCoffe )
        })
            .then( res => res.json() )
            .then( data => {
                console.log( data );
                if (data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                    const updates = updatedCoffe;
                    setCoffe(updates);
                } 
            })
            form.reset();
    }
    return (
        <div className="w-full h-full bg-purple-200 py-32">
            <form className="border bg-white w-[600px] mx-auto py-10 px-16 grid gap-2" onSubmit={hadleUpdateCoffe}>
                <h1 className="text-center my-4 text-3xl font-bold">update coffe: {name}</h1> 
                <div className="grid gap-2">
                    <label>Coffee Name</label> 
                    <input name="coffe_name" type="text" defaultValue={name} className="bg-purple-300 rounded-md px-3 py-2 border border-black"/>
                </div>

                <div className="grid gap-2">
                    <label>Catagory</label>
                    <input name="catagory" type="text" defaultValue={catagory} className="bg-purple-300 rounded-md px-3 py-2 border border-black"/>
                </div>

                <div className="grid gap-2">
                    <label>Details</label>
                    <input name="details" type="text" defaultValue={details} className="bg-purple-300 rounded-md px-3 py-2 border border-black"/>
                </div>

                <div className="grid gap-2">
                    <label>Quantity</label>
                    <input name="quantity" type="number" defaultValue={quantity} className="bg-purple-300 rounded-md px-3 py-2 border border-black"/>
                </div>

                <button type="submit" className="bg-purple-400 w-fit px-4 py-1 rounded-md my-4 m-auto border border-black">save changes</button>
                
            </form>
        </div>
    );
};

export default UpdateCoffe;