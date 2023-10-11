import React from 'react'
import { Issue } from '../interfaces/issue'
import { sleep } from '../../helpers/sleep'
import { githubApi } from '../../api/githubApi'
import { useQuery } from '@tanstack/react-query'



const getIssues = async(): Promise<Issue[]> => {

        await sleep(2)
        const {data} = await githubApi.get<Issue[]>('/issues')
        console.log(data)
        return data
    }


export const useIssues = () => {

    const issuesQuery = useQuery(['issuesQuery'],getIssues)
  
    return {
        issuesQuery, 
    }
}


