import React, { useEffect } from 'react';
import Avatar from '../img/avatar.png'

const Profile = () => {

    const callProfilePage = async () => {

    }

    useEffect(() => {
        callProfilePage();
    }, [])
    

  return (
    <div className="w-full min-h-full flex items-center justify-center">
      <div className="w-[90%] md:w-[85%] border border-green-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
        <div className="py-2 flex-1 flex flex-col items-center justify-center">
            <img src={Avatar} alt="profileImg" className="w-150 h-150 md:w-225 md:h-225"/>
            <div className="w-full flex items-center justify-center">
            <p className="text-xl md:text-3xl text-green-600 mt-3 md:mt-0 md:py-3 md:my-3 font-semibold">Prabhupada Sahoo</p>
            </div>
        </div>
        <div className="w-full py-2 flex-1 flex flex-col items-center justify-center relative gap-2">
            <div className="flex w-full">
                <p className="p-2 text-xl">Email</p>
                <input type="text" className="w-full text-lg md:text-xl p-2 ml-2 bg-gray-300 rounded-lg" defaultValue="prabhupada121@gmail.com" disabled={true}/>
            </div>
            <div className="flex w-full">
                <p className="p-2 text-xl">Mobile</p>
                <input type="text" className="w-full text-lg md:text-xl p-2 bg-gray-300 rounded-lg" defaultValue="0123456789"/>
            </div>
        </div>
        </section>
      </div>
    </div>
  )
}

export default Profile