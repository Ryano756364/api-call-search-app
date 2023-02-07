// This file will be a list of all images available
import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList(props){

  const renderedImages = props.images.map((image) => {
    return <ImageShow key={image.id} image={image}/>;
  })

  return (
    <div className='image-list'>
      {renderedImages}
    </div>
  )
}

export default ImageList;
