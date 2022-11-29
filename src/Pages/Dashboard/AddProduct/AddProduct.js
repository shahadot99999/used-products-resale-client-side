import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    //console.log(imageHostKey);

    const navigate = useNavigate();

    const handleAddDoctor = data =>{

        //console.log(data.image[0])
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imgData =>{
            //console.log(imgData)
            if(imgData.success){
                console.log(imgData.data.url)
                const product = {
                    name: data.name,
                    price: data.price,
                    quality: data.quality,
                    mobilenumber: data.mobilenumber,
                    location: data.location,
                    description: data.description,
                    year: data.year,
                    image: imgData.data.url
                }

                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }, 
                    body: JSON.stringify(product)
                })
                .then(res=>res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully.`);
                    navigate('/dashboard/manageproducts')
                })
            }
        })

    }
    return (
        <div className='w-96 p-7'>
            <h2 className='text-3xl'>Add Product</h2>

            <form onSubmit={handleSubmit(handleAddDoctor)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                       
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Price</span></label>
                        <input type="number" {...register("price", {
                            required: "price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Quality</span></label>
                        
                        <select {...register('quality')} className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Select Your Condition</option>
                                     <option>Excellent</option>
                                        <option>Good</option>
                                      <option>Fair</option>
                        </select>


                       
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Mobile Number</span></label>
                        <input type="mobilenumber" {...register("mobilenumber", {
                            required: "mobilenumber is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.mobilenumber && <p className='text-red-500'>{errors.mobilenumber.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="location" {...register("location", {
                            required: "location is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <input type="description" {...register("description", {
                            required: "description is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                    </div>

                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Purchase Year</span></label>
                        <input type="year" {...register("year", {
                            required: "year is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.year && <p className='text-red-500'>{errors.year.message}</p>}
                    </div>
                    
                    {/* Photo set up */}

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>

                    {/* <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div> */}

                   
                    <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                    
                </form>
        </div>
    );
};

export default AddProduct;