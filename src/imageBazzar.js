// const API_key = _BYdNFWO3yK6_Z5oJ3yC19YPYKmOmClUFp_mxHR2ZnY;

import React, {useEffect, useState} from "react";
import  ImagesList from "./components/ImagesList";
import  Pagination from "./components/Pagination";
import SearchBar from "./components/Searchbar";
import "./styles/index.scss";
import axios from "axios";
// import data from "./data";



 const ImageBazzar = () =>{
    
   const[pageNumber, setPageNumber] = useState(1);
   const[query, setQuery] = useState('books');
  const[serverResponse, setServerResponse] = useState(null);
  const [apiStatus, setApiStatus] = useState("init");

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
    setPageNumber(1);
}

   useEffect(()=>{
    (async function (){
        try{
              const response = await axios({
                url: `https://api.unsplash.com/search/photos`,
                params: {
                    page: pageNumber,
                    query,
                    client_id:"_BYdNFWO3yK6_Z5oJ3yC19YPYKmOmClUFp_mxHR2ZnY",
                },
                method:"GET"
              });

              setServerResponse(response.data);
              setApiStatus("success");
        }
        catch (error){
         alert("something went wrong....!!!");
         setApiStatus("error");
        }
    })();
   },[pageNumber,query]);

    return (
        <div className="container">
            <SearchBar updateQuery={updateQuery} apiStatus={apiStatus} />
            <ImagesList list={serverResponse?.results}/>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} apiStatus={apiStatus}/>

        </div>
    );
}

export default ImageBazzar;
