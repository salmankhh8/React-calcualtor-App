import React from 'react'
import './chess.css'
const horizontalAXis=['a', 'b' , 'c' ,'d','e','f','g','h']
const verticalAxis=['1','2','3','4','5','6','7','8']

const Chess = () => {
  let board=[]
  for(let j=verticalAxis.length-1; j>=0; j--){

  for(let i=0;i<horizontalAXis.length; i++){
    const index=j+i+2
    if(index % 2===0){
      board.push(<div className="tile tile-black"> </div>)
    }
    else{
      board.push(<div className="tile tile-white"> </div>)

    }
    }
  }
     return (
        <div id='chessBoard'>{board}
        </div>
    )
}

export default Chess
