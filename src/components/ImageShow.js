// This file will show each individual image
import './ImageShow.css';

function ImageShow(props){
  return (
    <div>
      {props.image.id}
    </div>
  )
}

export default ImageShow;