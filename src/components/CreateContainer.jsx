import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {categories} from '../utils/data'
import Loader from './Loader'
import {MdCloudUpload, MdDelete, MdFoodBank} from 'react-icons/md';
import {FaRupeeSign, FaUnity, FaWeightHanging} from 'react-icons/fa'

const CreateContainer = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [units, setUnits] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState(null);
  const [field, setField] = useState(false); // this is for if any field blank or error in any field
  const [alertStatus, setAlertStatus] = useState('danger'); // this is a alert message status if the status is danger then it show red other wise it show green
  const [msg, setMsg] = useState(null); // this is alert message for any error or any successfull process
  const [loading, setLoading] = useState(false); // this is for loader during upload image

  // this is for upload image for item iamge
  const uploadImage = () => {

  }

  // this is for delete image if user want to change that upload image
  const deleteImage = () => {

  }

  // this is for save data after fill the field
  const saveData = () => {

  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-green-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
      <p className="text-3xl text-green-700 font-semibold ">Add Product</p>
        {
          field && (
            <motion.p initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity: 0}} className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger' ? 'bg-red-400 text-red-800' : 'bg-emerald-400 text-emerald-800'}`}>
              {msg}
            </motion.p>
          )
        }

        {/* 1st input field for item name */}
        <div className="w-full py-2 border-b border-green-300 flex items-center gap-2">
          <input type="text" required value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Item Name" className="w-full h-full text-lg pl-3 bg-transparent font-semibold outline-none border-none"/>
        </div>

        {/* 2nd input field for quantity value */}
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-green-300 flex items-center gap-2">
            <FaUnity className="text-gray-700 text-2xl"/>
            <input type="text" required placeholder="Quantity" className="w-full h-full text-lg bg-transparent outline-none border-none font-semibold" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
          </div>
        </div>

        {/* 3rd input field for units value */}
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-green-300 flex items-center gap-2">
            <FaWeightHanging className="text-gray-700 text-2xl"/>
            <input type="text" required placeholder="Units" className="w-full h-full text-lg bg-transparent outline-none border-none font-semibold" value={units} onChange={(e) => setUnits(e.target.value)}/>
          </div>
        </div>

        {/* 4th input field for category */}
        <div className="w-full">
          <select onChange={(e) => setCategory(e.target.value)} className="outline-none w-full text-base border-b-2 border-green-200 p-2 rounded-md cursor-pointer">
            <option value="other" className="bg-white text-gray-300 rounded-lg">Select Category</option>
            {/* this is categories display which is fetch from data.js file from a local file */}
            {
              categories && categories.map(item => (
                <option key={item.id} className="text-base border-0 outline-none capitalize bg-white text-headingColor rounded-lg" value={item.urlParamName}>
                  {item.name}
                </option>
              ))
            }
          </select>
        </div>
          
        {/* 5th input field for image */}
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-green-300 w-full h-225 md:h-420 cursor-pointer rounded-lg ">
            {loading ? <Loader/> : <>
            {/* this is for if there is no image uploaded */}
                {!image ? <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <MdCloudUpload className="text-gray-500 text-4xl hover:text-gray-700"/>
                      <p className="text-gray-500 hover:text-gray-700">Product Image</p>
                    </div>
                    <input type="file" name="uploadimage" accept="image/*" onChange={uploadImage} className="w-0 h-0"/>
                  </label>
                </> : <>
                {/* this is for if there is a uploaded image */}
                  <div className="relative h-full">
                    <img src={image} alt="uploadedImg" className="w-full h-full object-cover"/>
                    <button type="button" className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out" onClick={deleteImage}><MdDelete className="text-white"/></button>
                  </div>
                </>}
            </>}
        </div>

        {/* 6th input field for price value */}
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-green-300 flex items-center gap-2">
            <FaRupeeSign className="text-gray-700 text-xl"/>
            <input type="text" required placeholder="Item Price" className="w-full h-full text-lg bg-transparent outline-none border-none font-semibold" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </div>
        </div>

        <div className="flex items-center w-full">
          <motion.button whileTap={{scale : 0.8}} type="button" className="l-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold" onClick={saveData}>Add</motion.button>
        </div>
      </div>
    </div>
  )
}

export default CreateContainer;