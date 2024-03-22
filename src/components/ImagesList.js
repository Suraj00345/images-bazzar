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
                    </div>
                )
              })
           }
        </section>
    )
}


export default ImagesList;