import React, { useState } from 'react'
import './Game.css'


function Game() {
    // function
 
    const computerChoices =["Rock","Papper","scissors"];

    // state
    const [computerChoice,setComputerChoice]=useState("")
    
    const [userchoice,setUserChoice]=useState("")
        const [computerPoint,setComputerPoint]=useState(0)
        const [userPoint,setUserPoint]=useState(0)
        const [gameOver, setGameOver] = useState(false);




    // computer move
    const generateRandom=()=>{
        
        
      const index = Math.floor(Math.random() * computerChoices.length)
    //   console.log(index);
      const randomcomputervalue= computerChoices[index]
      setComputerChoice(randomcomputervalue)

    //   console.log(randomcomputervalue);
        if((userchoice=== "Rock" && randomcomputervalue=== "Papper") || (userchoice ==="Papper" && randomcomputervalue==="scissors") || (userchoice=== "scissors" && randomcomputervalue=== "Rock")){
            setComputerPoint(computerPoint + 1)
        }
        else if((randomcomputervalue=== "Rock" &&userchoice === "Papper") || (randomcomputervalue ==="Papper" && userchoice==="scissors") || (randomcomputervalue=== "scissors" && userchoice=== "Rock")){
            setUserPoint(userPoint + 1)
        }
        else{
           setComputerPoint(computerPoint) 
           setUserPoint(userPoint)
        }

        if (userPoint === 10 || computerPoint === 10) {
            setGameOver(true);
        }


    }
    const resetGame = () => {
        setComputerPoint(0);
        setUserPoint(0);
        setGameOver(false);
    };

   

  return (
    <div className='container-fluid '>
            <div className='title-fixed'>
                 <h1>Rock Paper Scissor game</h1>
            </div>
            <div className='three-head'>

                <div>
                    <h2>computer choice : {computerChoice}</h2>
                </div>

                <div>
                    <h2>User choice : {userchoice}</h2>
                </div>
            </div>
            <span>Result:</span>

            <div className='center-images'>
                <div>
                    <h3>user Point:{userPoint}</h3>
                    {
                    userPoint ===10 && <div><h2>User win</h2></div>
                    }
                </div>
                <img  onClick={()=>setUserChoice("Papper")}src="/Assts/papper.png" alt="" />
                <div>
                    <h3> computer  Point: {computerPoint}</h3>
                    {
                    computerPoint === 10 && <div><h2>computer win</h2> </div>
                    }
                </div>
            </div>

            <div className=' both-side-images'>

                <div className='left-side-image'>
                      <img onClick={()=>setUserChoice("scissors")} src="/Assts/scissor.png" alt="" />
                </div>
                <div>
                {!gameOver && <button onClick={generateRandom}>Play</button>}
                    {gameOver && <button onClick={resetGame}>Reset</button>}
                </div>
                    
                <div className='right-side-image'>
                    <img onClick={()=>setUserChoice("Rock")} src="/Assts/stone.png" alt="" />
                </div>
               

               

            </div>
    </div>
  )
}

export default Game