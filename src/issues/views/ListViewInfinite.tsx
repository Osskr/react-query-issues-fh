import {useState} from 'react'
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { State } from '../interfaces/issue';
import { useIssuesInfinite } from '../hooks/useIssuesInfinite';


export const ListViewInfinite = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [state, setState] = useState<State>()
  const {issuesQuery} = useIssuesInfinite({state, labels:selectedLabels})

  const onLabelChanged = (labelName:string) =>{
    (selectedLabels.includes(labelName))
    ? setSelectedLabels(selectedLabels.filter(label => label !==labelName))
    : setSelectedLabels([...selectedLabels, labelName])
  }


  return (
    <div className="row mt-5">
      
      <div className="col-8">

        {
          issuesQuery.isLoading
          ?( <LoadingIcon/>)
          : (<IssueList
                  issues={issuesQuery.data?.pages.flat() || []}  //[].flat() aplana un array lo pasa de [[a,b][c,d]] --> [a,b,c,d] 
                  state={state}
                  onStateChanged={(newState)=> setState(newState)}
              />)
        }

        <button className='btn btn-outline-primary mt-3'
                onClick = {()=> issuesQuery.fetchNextPage()}
                disabled = { !issuesQuery.hasNextPage}>Load  More...</button>
 
        
      </div>
      
      <div className="col-4">
        <LabelPicker  selectedLabels={selectedLabels} onChange={(labelName)=> onLabelChanged(labelName)}/>
      </div>
    </div>
  )
}
