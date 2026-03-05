import React from "react";

 //image,name,role
const ProfileCard=({image,name,role})=>{
return(
     <div className="bg-white shadow-lg rounded-xl p-6 w-80 ">
     <img
       src={image}
       alt="profile"
       className="w-32 h-32 rounded-full mx-auto"
     />
     <h2 className="text-2xl font-bold text-center mt-4">
       {name}
     </h2>
     <p className="text-gray-600 text-center">
       {role}
     </p>
     <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
       View Profile
     </button>

     </div>
)
};





export default ProfileCard