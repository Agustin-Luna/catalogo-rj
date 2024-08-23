import { Link } from 'react-router-dom'
import mesaDulce from '../../assets/mesadulce.jpeg'
import './Inicio.css'


const Inicio = () => {
  return (
    <div className='card-1'>
        <img src={mesaDulce} alt="card-img" className='imagen-btn'/>
        <button className='card-button'>
        <Link to="/mesa-dulce" className='link-mesaDulce'>Ver Categoria</Link>
        </button> 
        <h3 className='titulo-card1'>Mesas dulces</h3>
      </div>
  )
}

export default Inicio;