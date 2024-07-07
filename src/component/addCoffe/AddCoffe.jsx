import Swal from 'sweetalert2';

// const MySwal = withReactContent(Swal);

const AddCoffe = () => {
    const hadleAddCoffe = ( e ) => {
        e.preventDefault();

        const form = e.target;

        const name = form.coffe_name.value;
        const catagory = form.catagory.value;
        const details = form.details.value;
        const quantity = form.quantity.value;
        const newCoffe = {name, catagory, details, quantity};
        console.log(newCoffe);

        fetch(`$(import.meta.env.VITE_SERVER_BASE_URL)/coffee`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify( newCoffe )
        })
            .then( res => res.json() )
            .then( data => {
                console.log( data );
                if (data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                } 
            })
            form.reset();
    }
    return (
        <div className="w-full h-full bg-purple-200 py-32">
            <form className="border bg-white w-[600px] mx-auto py-10 px-16 grid gap-2" onSubmit={ hadleAddCoffe }>
                <h1 className="text-center my-4 text-3xl font-bold">Add Coffe</h1> 
                <div className="grid gap-2">
                    <label>Coffee Name</label> 
                    <input name="coffe_name" type="text" className="bg-purple-300 rounded-md px-3 py-2 border border-black"/>
                </div>

                <div className="grid gap-2">
                    <label>Catagory</label>
                    <input name="catagory" type="text" className="bg-purple-300 rounded-md px-3 py-2 border border-black"/>
                </div>

                <div className="grid gap-2">
                    <label>Details</label>
                    <input name="details" type="text" className="bg-purple-300 rounded-md px-3 py-2 border border-black"/>
                </div>

                <div className="grid gap-2">
                    <label>Quantity</label>
                    <input name="quantity" type="number" className="bg-purple-300 rounded-md px-3 py-2 border border-black"/>
                </div>

                <button type="submit" className="bg-purple-400 w-fit px-4 py-1 rounded-md my-4 m-auto border border-black">Add</button>
                
            </form>
        </div>
    );
};

export default AddCoffe;