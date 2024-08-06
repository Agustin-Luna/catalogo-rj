import Icon from '../../assets/social.png';
import './btnWsp.css'
import { Link } from "react-router-dom";



const BtnWsp = () => {
  return (
    <div className="btn-wsp-container">
        <Link to="https://wa.me/+543814479936" target="_blank">
            <img src={Icon} alt="icon-whatsapp" className='icono-flotante'/>
        </Link>
    </div>
  )
}

export default BtnWsp