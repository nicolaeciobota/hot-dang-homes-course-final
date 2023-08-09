import { useEffect, useState } from "react";
import {Input} from "../../Input";
import queryString from "query-string";
export const Filters = ({onSearch}) => {
 const [petFriendly, setPetFriendly] = useState(false);
 const [hasParking, setHasParking] = useState(false);
 const [minPrice, setMinPrice] = useState("");
 const [maxPrice, setMaxPrice] = useState("");
 const handleSearch = () => {
onSearch(
 {
  petFriendly,
  hasParking,
  minPrice,
  maxPrice,
 }
);
 };
 useEffect(() => {
const {petFriendly: petFriendlyInitial,
hasParking: hasParkingInitial,
minPrice: minPriceInitial,
maxPrice: maxPriceInitial,
} = queryString.parse(
 window.location.search
);
setPetFriendly(petFriendlyInitial === "true");
setHasParking(hasParkingInitial === "true");
setMinPrice(minPriceInitial || "");
setMaxPrice(maxPriceInitial || "");

 }, [])
 return (
  <div className=" container max-w-5xl mx-auto my-5 flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md shadow-lg">
   <div className="flex flex-col md:flex-row">
<div className="mx-1">
 <label className="cursor-pointer">
  <input type="checkbox" checked={hasParking} onChange={()=> setHasParking((value) => !value)} />
  <span className="pl-2">Has parking</span>
 </label>
</div>
<div className="mx-1">
<label className="cursor-pointer">
  <input type="checkbox" checked={petFriendly} onChange={()=> setPetFriendly((value) => !value)} />
  <span className="pl-2">Pet friendly</span>
 </label>
</div></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex-1">
 <span>Min price</span>
 <Input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
</div>
<div className="flex-1">
 <span>Max price</span>
 <Input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
</div></div><div className="flex justify-center">
<div className="btn" onClick={handleSearch}>Search</div></div>
   </div>
 )
};