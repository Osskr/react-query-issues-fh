// Un custom hook no es mas que una simple funcion 
import { useQuery } from '@tanstack/react-query'
import { githubApi } from '../../api/githubApi'
import { Label } from '../interfaces/label'
import { sleep } from '../../helpers/sleep'


const getLabels = async (): Promise<Label[]> => {

    await sleep(2)
    const { data } = await githubApi.get<Label[]>('/labels?per_page=100',{
    headers:{
        Autorization: null
    }})
    console.log(data)
    return data;
}


export const useLabels = () => {

    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 60, // el tiempo que dura la peticion en stale en este caso 1hr
            placeholderData: [{
                "id": 1205087127,
                "node_id": "MDU6TGFiZWwxMjA1MDg3MTI3",
                "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Concurrent%20Features",
                "name": "Component: Concurrent Features",
                "color": "ffccd3",
                "default": false,
               },
               {
                "id": 1757816973,
                "node_id": "MDU6TGFiZWwxNzU3ODE2OTcz",
                "url": "https://api.github.com/repos/facebook/react/labels/dependencies",
                "name": "dependencies",
                "color": "0366d6",
                "default": false,
                "description": "Pull requests that update a dependency file"
            }], // placeHolderData nos sirve par amostrar una informacion para mostrar algo en lugar del loading
            // initialData, es parecido pero tiene la diferencia que si usamos staleTime entonces va a considerar fresca esa data por el tiempo que se dure el stale time
        }

    )

    return labelsQuery
}

