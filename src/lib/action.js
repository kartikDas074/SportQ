'use server'

export const Venue=async()=>{
    const  data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ground`);
    return await data.json();
}

export const VenueDetail=async(id)=>{
    const data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ground/${id}`);
    return await data.json();
}

export const BookingPost=async(data)=>{
    const result=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Bookings`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    return await result.json();
}