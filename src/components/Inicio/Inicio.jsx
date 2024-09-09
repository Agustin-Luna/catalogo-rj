import { Link } from 'react-router-dom'
import BtnWsp from '../../utils/BotonWhatsapp/BtnWsp.jsx'
import './Inicio.css'


const Inicio = () => {
  return (
    <>
      <div className='container-bienvenida'>
        <h1 className='title-bienvenida'>bienvenidos a estilo pastelero </h1>
        <p className='parrafo-bienvenida'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio suscipit odit voluptates ipsum eligendi voluptas tenetur minima, libero reiciendis dolorem placeat assumenda facilis recusandae doloribus officia dolor molestias accusantium molestiae.</p>
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
