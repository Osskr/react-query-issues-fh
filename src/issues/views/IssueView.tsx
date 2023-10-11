import { Link, Navigate, useParams } from 'react-router-dom';
import { IssueComment } from '../components/IssueComment';
import { useIssue } from '../hooks/useIssue';
import { LoadingIcon } from '../../shared/components/LoadingIcon';

  
export const IssueView = () => {

const params = useParams();
const {id = ''} = params

//+id convierte el string a number
const {issueQuery, issueComments} = useIssue(+id);


if( issueQuery.isLoading) return <LoadingIcon/>
if( !issueQuery.data) return (<Navigate to='./issues/list'/> )

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to='./issues/list'>Go Back</Link>
      </div>


      {/* Primer comentario */}
      {/* issueQuery.data! lleva ! porque puede ser undefined      */}
    
        <IssueComment issue={issueQuery.data}/>  

      {
        issueComments.isLoading && (<LoadingIcon/>)
      }  
    
      {
        issueComments.data?.map((comment) => (<IssueComment  key={ comment.id}  issue={comment} />))
      }
    </div>
  )
}


