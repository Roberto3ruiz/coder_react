import '../estilos/Checkout.css';import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'


const Checkout = () => {
    const [user, setUser] = useState({})
    const [validate, setValidate] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear}= useContext(CartContext)
    const userData = (e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value 
            }
        )
    }



    const finalizarCompra = (e)=>{
        e.preventDefault()
        if(!user.name || !user.lastname || !user.email ){
            alert('Los campos son obligatorios')
        }else if(user.email !== validate){
            alert('Los mails deben ser iguales')
        }else{
            //objeto de la orden
            let order = {
                buyer: user,
                carrito:cart,
                total:cartTotal(),
                date: serverTimestamp()
            }
            //traer nuestra coleccion
            const ventas = collection(db, "orders")
            //agregamos un doc
            addDoc(ventas,order)
            .then((res)=>{
                //actualizar el stock
                //OPCIONAL
                // cart.forEach((item)=>{
                //     const docRef = doc(db, "productos", item.id)
                //     getDoc(docRef)
                //     .then((dbDoc)=>{
                //         updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                //     })
                // })
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
      }

      
    return (
        <div>
        {orderId !== '' ? <div>
                <h4>Generaste bien tu orden!</h4>
                <h5>El id es: {orderId}</h5>
                <Link to='/' className='btn btn-success'>Volver a home</Link>
        </div>
        :

                <div className="checkout-container">

                    <h4>Completa tus datos</h4>

                    <form onSubmit={finalizarCompra}>

                        <input type="text" name="name" placeholder="Ingresa tu nombre" onChange={userData} />
                        <input type="text" name="lastname" placeholder="Ingresa tu apellido" onChange={userData} />
                        <input type="text" name="email" placeholder="Ingresa tu email" onChange={userData} />
                        <input type="text" name="second-email" placeholder="Repite tu email" onChange={(e)=> setValidate(e.target.value)} />

                        <button type="submit">Enviar formulario</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Checkout;
