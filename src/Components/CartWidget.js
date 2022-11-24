import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CustomProvider"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const CartWidget = () => {

    const valorDelContexto = useContext(contexto)

    const [estado, setEstado] = useState(false)

    const abrirModal = () => {
    setEstado(true)
    }
    const cerrarModal = () => {
    setEstado(false)
    }

    return (
        <>
            <Button className="material-icons" onClick={abrirModal}>shopping_cart_checkout</Button>
            

      <Modal isOpen={estado}>
        <ModalHeader>
          Carrito
        </ModalHeader>
        <ModalBody>
        <span className="items_cantidad">{valorDelContexto.cantidadTotal}</span>
        </ModalBody>
        <ModalFooter>
            <Button color="primary">Comprar</Button>
            <Button color="secondary" onClick={cerrarModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
        </>
           
    )
}

export default CartWidget

// function CartWidget (){
//     return(
//         <>
//             <Link to="/cart"><span className="material-icons">shopping_cart_checkout</span></Link>
//         </>
//     )
// }

// export default CartWidget;