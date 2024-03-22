import React from "react"

const Pagination = ({pageNumber, setPageNumber}) =>{
    return (<div className="pagination-box">
        <button 
        className="material-icons"
        disabled={pageNumber===1}
        onClick={()=>{
            setPageNumber(prev=>prev-1)
        }}
        >chevron_left</button>
        <p>{pageNumber}</p>
        <button 
        className="material-icons"
        onClick={() =>{
            setPageNumber(prev => prev + 1);
        }}
        >chevron_right</button>
    </div>
    )
}



export default Pagination;