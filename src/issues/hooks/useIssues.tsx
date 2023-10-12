import React from 'react'
import { Issue, State } from '../interfaces/issue'
import { sleep } from '../../helpers/sleep'
import { githubApi } from '../../api/githubApi'
import { useQuery } from '@tanstack/react-query'

interface Props {
    state?: State
    labels: string[]
}


const getIssues = async(labels: string[], state?: State): Promise<Issue[]> => {

 
        await sleep(2)
        const params = new URLSearchParams();
        
        if (state) params.append('state',state)

        if( labels.length>0){

            const labelString = labels.join(',');
            params.append('labels',labelString)
        }

         params.append('page','1')
         params.append('per_page','5')
        //console.log(params)
        const {data} = await githubApi.get<Issue[]>('/issues',{params})
       // console.log(data)
        return data
    }


export const useIssues = ({state,labels}:Props) => {

    const issuesQuery = useQuery(['issuesQuery', {state, labels}], () => getIssues(labels,state))
  
    return {
        issuesQuery, 
    }
}


