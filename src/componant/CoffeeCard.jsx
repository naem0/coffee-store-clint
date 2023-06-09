/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, name, quantity, supplier, taste, photo } = coffee;
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${_id}`,{
                    method: 'DELETE'
                })
                .then(res =>res.json())
                .then(data =>{
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                    const remening = coffees.filter(coff => coff._id !== _id)
                    setCoffees(remening)
                })
              
            }
          })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl gap-8 p-8">
                <figure><img className="w-28" src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full pr-4">
                    <div>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn">View</button>
                            <Link to={`updatae-coffees/${_id}`}>
                                <button className="btn">Edit</button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;