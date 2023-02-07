// This file will be a list of all images available
import './ImageList.css';

function ImageList(props){
  return (
    <div>
      ImageList: {props.images.length}
    </div>
  )
}

export default ImageList;
