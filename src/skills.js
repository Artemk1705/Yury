import React from "react";

const Skills = React.forwardRef((props, ref) => {

    return (
        <div className="skills_block" ref={ref}>
            <h2 className="slills_title">Soft and Professional Skills</h2>
            <div className="skills">
            <div className="skills_content">
                <div className="first_half">
                    <div className="two_block">
                    <div className="small_bock">
                        <h3>Advanced Driving Techniques</h3>
                        <p>Mastery over precision driving, evasive maneuvers, and high-speed driving.</p>
                    </div>
                    <div className="small_bock">
                    <h3>Vehicle Maintenance</h3>
                        <p>Deep understanding of high-end vehicles and their maintenance needs.</p>
                    </div>
                    </div>
                    <div className="big_block">
                    <h3>Effective Communication</h3>
            <p>Clear, polite, and effective communication with passengers and clients.</p>
            <h3>Situational Awareness</h3>
            <p>Keen awareness of surroundings to anticipate needs or challenges.</p>
            <h3>Patience</h3>
            <p>Maintaining a high level of professionalism, irrespective of the client or situation.</p>
                    </div>
                </div>
                <div className="second_half">
                <div class="double_block">
                <div className="small_bock">
                <h3>Route Planning</h3>
                        <p>Knowledge of the best and fastest routes, including alternatives in case of unexpected situations.</p>
                </div>
                <div className="small_bock">
                <h3>Safety Protocols</h3>
                        <p>Comprehensive understanding of advanced safety protocols, both for driving and personal protection.</p>
                </div>
                </div>
                <div className="triple_block">
                <div class="double_block">
                <div className="small_bock">
                <h3>Knowledge of Luxury Cars</h3>
                        <p>Familiarity with the latest models, features, and amenities of luxury and premium vehicles.</p>
                </div>
                <div className="small_bock">
                <h3>Client Confidentiality</h3>
                        <p>Respecting and maintaining strict confidentiality for high-profile clients.</p>
                </div>
                </div>
                <div className="mini_long">
                 <h3>Dedication to Service:</h3>
                 <p>Ensuring that passengers have the most comfortable, efficient, and pleasant journey possible.</p></div>
                </div>
                </div>
            </div>
            <div className="long_block">
            <h3>30 - Year Career Summary</h3>
            <p>In the span of three decades, I've safely transported countless high-profile clients across millions of miles, ensuring impeccable service each time. I've encountered and adapted to numerous challenges, always prioritizing passenger safety and comfort. Along the way, I've learned every nuance of luxury vehicles, participated in advanced driving trainings, and evolved with the ever-changing demands of the luxury transportation industry. My journey has been both fulfilling and enlightening, teaching me the importance of dedication, adaptability, and unwavering professionalism.</p>
            </div>
            </div>
        </div>
    )
})

export default Skills