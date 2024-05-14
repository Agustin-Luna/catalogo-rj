import { Link } from "react-router-dom"




const Footer = () => {
    return (
        <footer className="flex justify-evenly p-4 mt-7 bg-pink-500 ">
            <div>
                <h2 className="items-center font-semibold text-xl">Por cualquier consulta hablanos por nuestras redes</h2>
            </div>
        <div>
            <ul className="flex gap-10 text-2xl mx-4">
                <li><Link to="https:/wa.me/+543814479936" target="_blank"><i className="bi bi-whatsapp text-4xl "></i></Link></li>
                <li><Link to="https://www.instagram.com/estiloo_pastelero/" target="_blank"><i className="bi bi-instagram text-4xl"></i></Link></li>
            </ul>
        </div>
        </footer>
    )
    }



export default Footer