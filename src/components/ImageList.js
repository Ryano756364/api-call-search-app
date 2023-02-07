// This file will be a list of all images available
import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList(props){

  const renderedImages = props.images.map((image) => {
    return <ImageShow image={image}/>;
  })

  return (
    <div>
      {renderedImages}
    </div>
  )
}

export default ImageList;
