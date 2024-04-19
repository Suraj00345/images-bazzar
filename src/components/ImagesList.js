import CustomImage from "./CustomImage";
import "../styles/images-list.scss";
  
  const ImagesList =({list})=>{
    // when list is undefined
    if(!list) return <h1>Fetching Data...</h1>

    return (
        <section className="images-list">
           {
              list.map(item =>{
                return (
                    <div className="image-wrapper">
                    <CustomImage url={item.urls.regular} key={item.id}/>
                    <div className="likes">
                                <span className="material-icons" style={{color: "red"}}>favorite</span>
                                <span style={{padding:"3px"}}>{item.likes}</span>
                    </div>
                    <p className="title">{item.tags[0]?.source?.title ?? item.description}</p>
                    </div>
                )
              })
           }
        </section>
    )
}


export default ImagesList;