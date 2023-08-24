import Photorec from "./photos/rec1.png"
import Photoreco from "./photos/rec2.png"
import React from "react";

const Rec = React.forwardRef((props, ref) => {
    return (
        <div  className="rec_block" ref={ref}>
            <h2 className="title_rec">Recommendations</h2>
        <div className="recomm">
        <img src={Photorec} alt="recom" className="recom_ph" />
        <img src={Photoreco} alt="recom" className="recom_ph" />
        </div>
        </div>
    )
})

export default Rec;