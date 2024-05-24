"use client"

import { useState } from "react";
import SafetyRating from "../../components/SafetyRating";
import CommRating from "../../components/CommRating";
import Like from "../../components/Like";

export default function Home() {

  const [safetyRating , setSafetyRating] = useState(0);
  const [commRating , setCommRating] = useState(0);
  const [likeValue , setLikeValue] = useState('default');

  const arr = [1,2,3,4,5];
  console.log("Safety rating = " , safetyRating);
  return (
    <div className="outerDiv">
      <h1>Leave a review</h1>

<div className="division">
<div className="heading">Safety</div>
     <SafetyRating arr={arr} safetyrating={safetyRating} setsafetyrating={setSafetyRating}></SafetyRating>
</div>
    
  <div className="division">
  <div className="heading">Communication</div>
        <CommRating arr={arr} commrating={commRating} setcommrating={setCommRating}></CommRating>
    </div>     

       <div className='division'>
       <div className="heading">Would You Recommend Trausti</div>
       <Like  likeValue={likeValue}  setLikeValue = {setLikeValue}></Like>
        </div> 
         </div>
         
  );
}
