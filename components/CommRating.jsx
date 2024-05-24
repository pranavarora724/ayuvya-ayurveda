"use client"

export default function commRating(props)
{
    console.log("Inside comm");
    function starHandler(val)
    {
        props.setcommrating(val);
    }

    const commRating = props.commrating;
    let arr = props.arr;

    return(
        <div className="starContainer">
            {
                arr.map( (val) =>{
                    console.log("Inside loop");
                    return(
                            <div key={val} className={`star ${(val<=commRating)?"selected":""}`}  onClick={()=>{
                             starHandler(val)
                            }}>&#9734;</div>
                    )
                } )
            }
        </div>
    )
       
}

