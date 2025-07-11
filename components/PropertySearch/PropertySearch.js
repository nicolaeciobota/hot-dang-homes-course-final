import { Suspense, useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";
import { Filters } from "./Filters";
import Loading from "./Loading";

export const PropertySearch = () => {
  const [properties, setProperties] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const pageSize = 3;
  const router = useRouter();
  
  const search = async () => {
    setLoading(true);
    try {
      const {page, minPrice, maxPrice, hasParking, petFriendly} = queryString.parse(window.location.search);
      const filters = {};
      if(minPrice){
        filters.minPrice = parseInt(minPrice);
      }
      if(maxPrice){
        filters.maxPrice = parseInt(maxPrice);
      }
      if(hasParking === "true"){
        filters.hasParking = true;
      }
      if(petFriendly === "true"){
        filters.petFriendly = true;
      }
      const response = await fetch(`/api/search`, {
        method: "POST",
        body: JSON.stringify({
          page: parseInt(page || "1"),
          ...filters,
        }),
      });
      const data = await response.json();
      console.log("SEARCH DATA: ", data);
      setProperties(data.properties);
      setTotalResults(data.total);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handlePageClick = async (pageNumber) => {
    const {
      petFriendly,
      hasParking,
      minPrice,
      maxPrice,
    } = queryString.parse(
      window.location.search
    );
    await router.push(`${router.query.slug.join("/")}?page=${pageNumber}&petFriendly=${petFriendly === "true"}&hasParking=${hasParking === "true" }&minPrice=${minPrice}&maxPrice=${maxPrice}`, null, {shallow: true,});
    search();
  };
  
  useEffect(() => {
    search();
  }, []);
  
  const handleSearch = async ({petFriendly, hasParking, minPrice, maxPrice}) => {
    // update our browser url
    //update search
    console.log("FILTERS: ", petFriendly, hasParking, minPrice, maxPrice);
    await router.push(`${router.query.slug.join("/")}?page=1&petFriendly=${!!petFriendly}&hasParking=${!!hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}`, null, {shallow: true,});
    search();
  };
  
  return (
    <div className="pb-20 mb-20">
      <Filters onSearch={handleSearch} loading={loading}/>
      <Suspense fallback={<Loading />}>
        <Results properties={properties} loading={loading} />
      </Suspense>
      {!loading && (
        <Pagination 
          onPageClick={handlePageClick}
          totalPages={Math.ceil(totalResults / pageSize)} 
        />
      )}
    </div>
  );
};