// This file will show each individual image
import './ImageShow.css';

function ImageShow(props){
  return (
    <div>
      <img src={props.image.urls.regular} alt={props.image.alt_description} />
    </div>
  )
}

export default ImageShow;