import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { insertComment } from '../../actions/MainActions';

function Comments({comments=[],id,getAfterChange}) {
  const [text,setText] = useState('');
  const dispatch = useDispatch();
  function sendComment(){
    if(text!= ''){
      const newComment = {
        blog_id:id,
        comment: text
      }
      dispatch(insertComment(newComment))
      .then(resp=>{
        setText('')
        getAfterChange()
      })
    }
  }
  return (
    <div className='comment_container'>
      <div className='comment_inp_container'>
        <input value={text} onChange={(e)=> setText(e.target.value)} type={'text'} />
        <button onClick={()=> sendComment()}>
          <i className='fas fa-paper-plane'></i>
        </button>
      </div>
      <ul className='comment_list'>

        {
          comments.map((data,i)=>{
            return(
                <li key={i}>
                    <div>
                      <h4>{data.user.name}</h4>
                      <span></span>
                    </div>
                    <p>{data.comment}</p>
                </li>
            )
          })
        }

      </ul>
    </div>
  )
}

export default Comments