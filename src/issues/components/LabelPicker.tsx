import { LoadingIcon } from "../../shared/components/LoadingIcon"
import { useLabels } from "../hooks/useLabels"
import {FC} from 'react'

interface Props {
  selectedLabels: string[];
  onChange: (labelName:string) => void;
}


export const LabelPicker: FC<Props> = ({selectedLabels, onChange}) => {

  //usando fetch api
  // const getLabels = async()=>{
  //     const res = await fetch('https://api.github.com/repos/facebook/react/labels')
  //     const data =  await res.json();
  //     console.log(data)
  //     return data;

  // }


  // // este codigo va dentro de un custom hook mas adelante
  //  const getLabels = async(): Promise<Label[]>=>{

  //   const { data }  = await githubApi.get<Label[]>('/labels')
  //   console.log(data)
  //   return data;
  //  }

//refetchOnWindowFocus:false Desactiva/Activa que la peticion se haga cada vez que se pone en foco la ventana 
  // const labelsQuery = useQuery(
  //   ['labels'],
  //   getLabels,
  //  {refetchOnWindowFocus:false}
   
  //  )

  


  // usando el customHook
  const labelsQuery = useLabels()

    if(labelsQuery.isLoading) // ! porque isLoading y no isFetching
      return (<LoadingIcon/>)


  return (
    <div>
      {
        labelsQuery.data?.map(label => (
          <span
            key={label.id}
            className={`badge rounded-pill m-1 label-picker  ${selectedLabels.includes(label.name)? 'label-active' : ''}` }
            style={{ border: `1px solid #${label.color}`, color: `${label.color}` }}
            onClick={()=> onChange(label.name)}
          >
            {label.name}
          </span>

        ))
      }


    </div>
  )
}
