import { Link } from 'react-router-dom'
import BtnWsp from '../../utils/BotonWhatsapp/BtnWsp.jsx'
import './Inicio.css'


const Inicio = () => {
  return (
    <>
      <div className='container-bienvenida'>
        <h1 className='title-bienvenida'>bienvenidos a estilo pastelero </h1>
        <span className='container-description'>
        <img src="https://firebasestorage.googleapis.com/v0/b/estilo-pastelero.appspot.com/o/mica-foto.jpeg?alt=media&token=9900e867-02cb-49d5-a101-ace8d3b24315" alt="foto-duenia-estPastelero"  className='foto-duenia'/>
        <p className='parrafo-bienvenida'>Holaa! Esta soy Yo. Me llamo Mica🦋.<br /> En mi página podrán encontrar todos los productos que ofrezco, Saludos.</p>
        </span>
      </div>

      <h1 className='category-title'>Categorias más solicitadas</h1>
      <div className='div-container-inicio'>
      {/* Card 1 */}
        <article className='article-container class-mesa'>
          <h3 className='title-inicio'>Mesas Dulces</h3>
          <span className='links-inicio'>
            <Link to="/mesa-dulce" className='link-btn'>Ver Categoria</Link>
          </span>
        </article>

      {/* Card 2 */}
        <article className='article-container class-tortas'>
          <h3 className='title-inicio' >Tortas</h3>
          <span className='links-inicio'>
            <Link to="/tortas" className='link-btn'>Ver Categoria</Link>
          </span>
        </article>

      {/* Card 3 */}
      <article className='article-container class-tartas'>
          <h3 className='title-inicio' >Tartas</h3>
          <span className='links-inicio'>
            <Link to="/tartas" className='link-btn'>Ver Categoria</Link>
          </span>
        </article>
      </div>
    <BtnWsp/>
    </>
  )
}



export default Inicio;
