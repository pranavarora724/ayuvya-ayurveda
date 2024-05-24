"use client"

import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

export default function Like(props)
{
   return(
    <div className="likeConatainer">
    
    <div>
    <BiDislike  className={`like_btn ${(props.likeValue=="Dislike")?"selected_btn_dislike":""} `}  onClick={()=>{
        props.setLikeValue("Dislike")
    }}/>
    <div className={` ${(props.likeValue=="Dislike")?"selected_btn_dislike":""} `}>No</div>
    </div>
    
    
    <div>
    <BiLike  className={`like_btn ${(props.likeValue=="Like")?"selected_btn_like":""} `} onClick={()=>{
        props.setLikeValue("Like") 
    }}/>
    <div className={` ${(props.likeValue=="Like")?"selected_btn_like":""} `}>Yes</div>
    </div>
</div>
   )
}