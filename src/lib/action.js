'use server'

export const Venue=async()=>{
    const  data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ground`);
    return await data.json();
}

export const VenueDetail=async(id,token)=>{
    const data=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ground/${id}`,{
        headers:{
             'authorization':`Bearer ${token}`
        }
    });
    return await data.json();
}

export const BookingPost=async(data,token)=>{
    const result=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Bookings`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
              'authorization':`Bearer ${token}`
        },
        body:JSON.stringify(data)
    })
    return await result.json();
}

export const userBooking=async(id,token)=>{
    const result=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Bookings/user/${id}`,{
        headers:{
             'authorization':`Bearer ${token}`
        }
    });
    return await result.json();
}

export const bookingCancel=async(id,token)=>{
    const result=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Bookings/${id}`,{
        method:"DELETE",
        headers:{
             'authorization':`Bearer ${token}`
        }
    });
    return await result.json();

}

export const addGround=async(data,token)=>{
       const result=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ground`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            'authorization':`Bearer ${token}`
        },
        body:JSON.stringify(data)
    });
    return await result.json();
}

export const getOwnerGround=async(email,token)=>{
    const result=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ground/owner/${email}`,{
        headers:{
             'authorization':`Bearer ${token}`
        }
    });
    return await result.json();
}

export const deleteGround= async (id,token)=>{
    const result=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ground/${id}`,{
        method:'DELETE',
        headers:{
             'authorization':`Bearer ${token}`
        }
    });
    return await result.json();
}

export const updateGround=async(id,data,token)=>{
    const result=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ground/${id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json',
            'authorization':`Bearer ${token}`
        },
        body:JSON.stringify(data)
    });
    return await result.json();
}

export const ownerPending=async(email,token)=>{
       
    const result=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Bookings/owner/${email}`,{
        headers:{
            'authorization':`Bearer ${token}`
        }
    });
    return await result.json();
}

export const ownerRespond=async(id,data,token)=>{
    const result=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Bookings/owner/${id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json',
            'authorization':`Bearer ${token}`
        },
        body:JSON.stringify(data)
    });
    return result.json();
}

