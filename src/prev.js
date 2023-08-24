import Mainph from "./photos/mU copy.png"

function Prev () {
    return (
        <div className="prev_block">
            <div className="name_block">
                <div className="title_drive">Professional LA Driver</div>
                <div className="last_name_block">
                <span className="last_name_prev">VLASOV</span>
                <span className="reflection-text">VLASOV</span>
                </div>
                <div className="first_name_block">
                <span className="first_name_prev">YURY</span>
                <span className="reflection-text_small">YURY</span>
                </div>
            <img src={Mainph} alt="photo" className="photo" />
            </div>
        </div>
    )
}

export default Prev