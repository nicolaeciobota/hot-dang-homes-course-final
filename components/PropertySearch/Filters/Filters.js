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
  <div className="container lg:max-w-screen-lg my-2 mx-auto flex justify-center items-center p-1 md:p-0">
    <div className="border border-gray-300 p-6 grid grid-cols-1  bg-white shadow-lg rounded-lg">
<div className="grid grid-cols-1 md:grid-cols-1 gap-2">
<div className="grid sm:grid-cols-2 grid-cols-1 gap-1  p-2 rounded">
<div className="flex  rounded items-center p-2">
 <span className="pr-1">Min price</span>
 <Input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
</div>
<div className="flex rounded items-center p-2">
 <span className="pr-1">Max price</span>
 <Input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
</div></div></div> <div className="flex flex-col md:flex-row justify-center my-auto items-center">
<div className="">
 <label className="cursor-pointer">
  <input type="checkbox" checked={hasParking} onChange={()=> setHasParking((value) => !value)} />
  <span className="pl-2">Has parking</span>
 </label>
</div>
<div className="grid grid-cols-1 md:grid-cols-1 gap-4"></div>
<div className="pt-6 md:pt-0 md:pl-6">
<label className="cursor-pointer">
  <input type="checkbox" checked={petFriendly} onChange={()=> setPetFriendly((value) => !value)} />
  <span className="pl-2">Pet friendly</span>
 </label>
</div><div className="flex p-4"><div className="btn text-center" onClick={handleSearch}>Search</div></div></div></div></div>
 )
};