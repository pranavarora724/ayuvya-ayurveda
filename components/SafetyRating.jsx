"use client"

export default function safetyRating(props)
{
    function starHandler(val)
    {
        props.setsafetyrating(val);
    }

    const safetyRating = props.safetyrating;
    let arr = props.arr;
    console.log("Safety rating = ", safetyRating);
    
    return(
        <div className="starContainer">
            {
                arr.map( (val) =>{
                    console.log("Inside loop");
                    return(
                            <div key={val} className={`star ${(val<=safetyRating)?"selected":""}`}  onClick={()=>{
                             starHandler(val)
                            }}>&#9734;</div>
                    )
                } )
            }
        </div>
    )       
}

