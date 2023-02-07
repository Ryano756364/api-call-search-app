// This file will be a list of all images available
import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList(props){

  const renderedImages = props.images.map((image) => {
    return <ImageShow key={image.id} image={image}/>;  //very important to add key to list

    // Make sure key is on top most element, such as...
    // <div key={image.id}>
    //    <ImageShow />
    // </div>
  })

  return (
    <div>
      {renderedImages}
    </div>
  )
}

export default ImageList;
