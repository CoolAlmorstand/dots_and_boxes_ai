






export function minimax(board, depth, maximazing, info, alpha = -Infinity, beta = Infinity) {

  if(depth == 0 || board.isTerminalState) { 
    info.totalPositions += 1
    return { newEval: board.score }
  }
  
  if(maximazing) {
    let maxEval = -Infinity
    let move = null
    for(let line of board.lines) {
      
      if(line.state != "empty") { continue }
      
      line.fillLine("team2")
      
      const newEval = minimax(board, depth - 1, false, info, alpha, beta).newEval
      
      line.emptyLine("team2")
      
      if(newEval > maxEval) {
        move = line
        maxEval = newEval
      }
      
      alpha = Math.max(alpha, newEval)
      
      if(beta <= alpha) { break }
      
    }
    
    return { newEval: maxEval, move }
  }
    
    else {
      let minEval = Infinity
      let move = null
      for(let line of board.lines) {
        
        if(line.state != "empty") { continue }
        
        line.fillLine("team1")
        
        const newEval = minimax(board, depth - 1, true, info, alpha, beta).newEval
        line.emptyLine("team1")
        
        if(newEval < minEval) {
          move = line
          minEval = newEval
        }
        
        beta = Math.min(beta, newEval)

        if(beta <= alpha) { break }
        
        
        
      }
      
      return { newEval: minEval, move }
    }
  }