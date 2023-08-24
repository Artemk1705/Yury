import React from "react";

const Epxe = React.forwardRef((props, ref) => {
    return (
        <div className="exp_block" ref={ref}>
            <h2 className="exp_title">Experience</h2>
            <div className="exp_conent">
                <div className="expirience_1">
                    <h3 className="expirience_title">Personal intercity Luxury Class Driver</h3>
                    <p className="expirience_text">Catered to the top management and VIP clients of the company.</p>
                    <p className="expirience_text">Collaborated with personal assistants to coordinate travel schedules.</p>
                    <p className="expirience_text">Adhered to strict confidentiality regarding passengers and their plans.</p>
                </div>
                <div className="expirience_2">
                    <h3 className="expirience_title"> KME – Private Event Driver</h3>
                    <p className="expirience_text">Collaborated with personal assistants to coordinate travel schedules.</p>
                    <p className="expirience_text">Ensured the safety and comfort of passengers according to their individual preferences.</p>
                    <p className="expirience_text">Daily planning and coordination of trips, including international transfers.</p>
                </div>
                <div className="expirience_3">
                    <h3 className="expirience_title">Private Driver for ASM</h3>
                    <p className="expirience_text">Daily planning and coordination of trips, including international transfers.</p>
                    <p className="expirience_text">Ensured the safety and comfort of passengers according to their individual preferences.</p>
                    <p className="expirience_text">Maintained the vehicle in impeccable condition, ready for trips at any given time.</p>
                </div>
            </div>
        </div>
    )
})

export default Epxe