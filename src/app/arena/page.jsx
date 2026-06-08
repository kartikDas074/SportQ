import { Venue } from "@/lib/action";
import Arena from "./ArenaComponent/Arena";



const ArenaPage = async () => {
     const data=await Venue();
     console.log(data);
    return (
        <div>
             <div>
                 <Arena data={data}></Arena>
             </div>
        </div>
    );
};

export default ArenaPage;