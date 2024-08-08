import React from 'react'

const MouseAni = ({bottom}) => {
    return (
        <div className={bottom?"mouse-ani-hide":"mouse-ani-box"}>
            <div className={"mouse-ani"}>
                <span id="mouse-child"></span>
            </div>
        </div>

    )
}

export default MouseAni