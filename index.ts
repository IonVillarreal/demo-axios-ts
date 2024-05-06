import axios from 'axios'

export type Lista = Post[]

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

async function obtenerPosts() {
  const respuesta = await axios.get<Lista>(
    'https://jsonplaceholder.typicode.com/posts/'
  )

  const valores = respuesta.data

  const soloTitulos = valores.map((value) => value.title)

  console.log(soloTitulos)

  const titulosCortos = valores.filter((value) => value.title.length > 20)

  console.log(titulosCortos)
}

obtenerPosts()
