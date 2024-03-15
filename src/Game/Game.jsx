import React from 'react'
import './Game.css'


function Game() {
  return (
    <div className='container-fluid '>
            <div>
                 <h1>Rock Paper Scissor game</h1>
            </div>
            <div className='three-head'>

                <div>
                    <h2>computer choice:</h2>
                </div>

                <div>
                    <h2>User choice:</h2>
                </div>
                <span>Result:</span>

            </div>
            <div className='center-images'>
                <img src="/Assts/papper.png" alt="" />
            </div>
            <div className=' both-side-images'>
                <div className='left-side-image'>
                      <img src="/Assts/scissor.png" alt="" />
                </div>

                <div className='right-side-image'>
                    <img src="/Assts/stone.png" alt="" />
                </div>
            </div>
    </div>
  )
}

export default Game