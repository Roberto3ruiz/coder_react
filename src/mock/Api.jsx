

const productos = [

{
    id: '1',
    nombre: 'Ultra Trail Oso Negro',
    tipo: 'Carrera',
    category: 'amateur',
    distancias: ['25km, 42km, 75km, 100km'],
    lugar: 'Santiago',
    estado: 'Nuevo León',
    fecha: '13/02/2025',
    imagen:'https://picsum.photos/200',
    videoUrl: 'https://www.youtube.com/embed/zVW5NxU9PqY?si=MhCdOHZTpJGYfz3Y',
    price:75,
    stock:22
  },
  {
    id: '2',
    nombre: 'Trail Urbano Xalapa',
    tipo: 'Carrera',
    category: 'profesional',
    distancias: ['5km'],
    lugar: 'Xallitic',
    estado: 'Veracruz',
    fecha: '13/01/2025',
    imagen:'https://picsum.photos/200',
    videoUrl: 'https://www.youtube.com/embed/tv9OiVkdx0w?si=fqaShYOWo5Nak-nH',
    price:500,
    stock:22
  },
  {
    id: '3',
    nombre: 'Trail Villa del Carbón',
    tipo: 'Carrera',
    category: 'familiar',
    distancias: ['14km, 26km'],
    lugar: 'Villa del Carbón',
    estado: 'Edo. De México',
    fecha: '14/1/2025',
    imagen:'https://picsum.photos/200',
    videoUrl: 'https://www.youtube.com/embed/UAbg3I-ffLg?si=C8XLSDUj6nLL-egh',
    price:10,
    stock:22
  }


]

export const getProducts =() => {
  let error = false
  return new Promise((resolve, reject) => {
    setTimeout (()=>{
      if (error){
        reject ('Hubo problema')
      } else{
        resolve(productos)
      }
    },2000)
  })
}

export const getOneProduct = (id) => {
  let error = false
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if (error){
        reject('Hubo un error')
      }else {
        let oneProduct = productos.find ((item)=> item.id ===id)
        resolve(oneProduct)
      }

    },2000)
  })
}
