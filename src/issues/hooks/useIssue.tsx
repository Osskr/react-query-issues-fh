import React from 'react'
import { useQuery } from '@tanstack/react-query';
import {Issue} from '../interfaces/issue'
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';


export const getIssueInfo = async (issueNumber:number):Promise<Issue>  => {
     
    await sleep(2)
    const {data} = await githubApi.get<Issue>(`/issues/${issueNumber}`)
    console.log(data)
    return data; 
}


export const getIssueComments = async (issueNumber:number):Promise<Issue[]>  => {
     
  await sleep(2)
  const {data} = await githubApi.get<Issue[]>(`/issues/${issueNumber}/comments`)
  console.log(data)
  return data; 
}



export const useIssue = ( issueNumber:number) => {
  
  const issueQuery =  useQuery(['issue', issueNumber], ()=> getIssueInfo(issueNumber));
  const issueComments =  useQuery(['issue', issueNumber,'comments'], ()=> getIssueComments(issueQuery.data!.number),{
      enabled: issueQuery.data !== undefined
  });
  
    return{
         issueQuery,issueComments
        }
}


/* ! se utiliza con issueQuery.data para decirle al compilador que confiamos  en que issueQuery.data no será nulo o indefinido*/

// enable:true|false, indica si la peticion esta activa o no, en caso de estar en false, nunca se va a ejecutar