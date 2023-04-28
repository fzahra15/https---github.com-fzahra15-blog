import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSuggestedUser } from '../../actions/MainActions'
import LeftSvg from './LeftSvg'
import RightSvg from './RightSvg'
import SuggestedCard from './SuggestedCard'

function SuggestedContainer() {
    const dispatch = useDispatch();
    const suggestedUser = useSelector(state => state.Data.suggestedUser);
    const containerRef = useRef();
    const [slide, setSlide] = useState(0);

    useEffect(()=>{
        dispatch(getSuggestedUser());

        console.log('result');
    },[])

    function changeSlide(page){
        for(let i=0;i<containerRef.current.children.length;i++){
            containerRef.current.children[i].style.transform = `translateX(-${240*page}px)`
        }
    }

    function slideBtns(type){
        let page = slide
        if(type == 'right'){
            if(page< containerRef.current.children.length -4){
                page++
            }else{
                page = 0
            }
        }else{
            if(page>=0){
                page--
            }else{
                page = containerRef.current.children.length-4;
            }
        }

        setSlide(page)
        changeSlide(page)
    }

  return (
    <div className='suggested_container container'>
        <button onClick={()=> slideBtns('left')}>
            <LeftSvg />
        </button>
        <div className='suggested_body' ref={containerRef} >
            {
                suggestedUser.map((user,i)=>{
                    return(
                        <SuggestedCard key={i} user={user} />
                    )
                })
            }

        </div>
        <button onClick={()=>slideBtns('right')}>
            <RightSvg/>
        </button>
    </div>
  )
}

export default SuggestedContainer