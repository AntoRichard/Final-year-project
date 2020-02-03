import React from 'react'
import Progress from '../../../Assets/Gif/progress.gif'

export const Loader = () => {
    return (
        <div>
            <img src={Progress} height={50} width={50} />
        </div>
    )
}
