import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const CoffeCard = ( { coffe , coffes, setCoffes } ) => {
    const { _id, name, catagory, details, quantity} = coffe;

    const navigate = useNavigate();

    const handleView = (id) =>{
        console.log(id);
    }

    const handleDelete = (id) =>{
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://coffe-store-server-j4bumqy88-al-jabirs-projects.vercel.app/coffee/${id}`, {
                        method: "DELETE"
                    })
                        .then( res => res.json())
                        .then( data => {
                            // console.log(data);
                            if( data.deletedCount > 0){
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });

                                const updates = coffes.filter(c => c._id !== id);
                                setCoffes(updates);
                            }
                        })
                }
            });
    }

    return (
        <div className="border dorder-black shadow-xl">
            <h1>{name}</h1>
            <h2>catagory: {catagory} </h2>
            <p>details:<br/> {details}</p>
            <p>Quantity: {quantity}</p>
            <div className="grid grid-cols-3 gap-2"></div>
            <button onClick={() => handleView(_id)}className="bg-purple-400 w-fit px-4 py-1 rounded-md my-4 m-auto border border-black">View</button>
            <button onClick={() => navigate(`updatecoffe/${_id}`)}className="bg-purple-400 w-fit px-4 py-1 rounded-md my-4 m-auto border border-black">Edit</button>
            <button onClick={() => handleDelete(_id)}className="bg-purple-400 w-fit px-4 py-1 rounded-md my-4 m-auto border border-black">Delete</button>
        </div>
    );
};

CoffeCard.propTypes = {
    coffe : PropTypes.object.isRequired,
    coffes : PropTypes.arrayOf( PropTypes.object ).isRequired,
    setCoffes : PropTypes.func.isRequired,
}

export default CoffeCard;