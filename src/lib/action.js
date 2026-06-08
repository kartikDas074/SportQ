'use server'

export const Venue=async()=>{
    const  data=await fetch('http://localhost:5000/ground');
    return await data.json();
}

export const VenueDetail=async(id)=>{
    const data=await fetch(`http://localhost:5000/ground/${id}`);
    return await data.json();
}