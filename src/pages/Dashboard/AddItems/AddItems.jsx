import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY; 
console.log(image_hosting_key);
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = (props) => {
    const axiosPublic = useAxiosPublic()
  const { register, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    console.log(data);
    // image upoload
    const imageFile = {image:data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
       headers:{
        'content-type':'multipart/form-data',
       }
    });
    console.log(res.data)
  };
  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="whats new?"
      ></SectionTitle>
      <div>
        <form className="m-10" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name",{required:true})}
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-4">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select defaultValue="default"
                {...register("category")}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select A Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            {/* price */}

            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                placeholder="Recipe Name"
                {...register("price",{required:true})}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Detail</span>
            </div>
            <textarea {...register("recipe",{required:true})}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>

            <div>
            <input {...register("image",{required:true})} type="file" className="file-input w-full max-w-xs mt-5" />
            </div>
          {/* <select
            {...register("category")}
            className="select select-bordered w-full"
          >
            <option disabled selected>Select A Category</option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="drinks">Drinks</option>
          </select> */}

          <input className="btn btn-primary mt-10" type="submit" value="Add Item" />
        </form>
      </div>
    </div>
  );
};

AddItems.propTypes = {};

export default AddItems;
