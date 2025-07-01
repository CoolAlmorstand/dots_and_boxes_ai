class Box {
  
  constructor(board, col, row){
    this.board = board
    this.col = col
    this.row = row
    this.filledBoxes = 0
    
    // empty // team1 // team2
    this.state = "empty"
    //the amount of linws around it that are filled
    this.counter = 0
  }
  
  incrementCounter(team){
    this.counter += 1
    
    if(this.counter == 4){
      this.board.score += team == "team1" ? -1 : 1
      this.state = team
      this.board.filledBoxes += 1
      if(this.board.filledBoxes == this.board.cols * this.board.rows){
        this.board.isTerminalState = true
      }
      // return true if a box was formed
      return true
    }
  }
  
  decrementCounter(team){
    if(this.state != "empty"){
      this.board.score -= team == "team1" ? -1 : 1
      
      this.board.filledBoxes -= 1
      this.board.isTerminalState = false
    }
    this.counter -= 1
    this.state = "empty"
  }
}

class Line {
  constructor(board, col, row, orientation, adjacentBoxes){
    this.col = col
    this.row = row
    this.board = board
    this.orientation = orientation
    this.state = "empty"
    this.adjacentBoxes = adjacentBoxes
  }
  
  fillLine(team){
    if(this.state != "empty") { return }
    
    this.board.unFilledLines -= 1
    let hasFormedBox = false
    
    this.state = "filled"
    this.adjacentBoxes.forEach( (box) => {
      // returns box Object if box forms
      hasFormedBox = box.incrementCounter(team) ? true : hasFormedBox
    })
    
    return hasFormedBox
  }
  
  emptyLine(team) {
     this.state = "empty"
     this.board.unFilledLines += 1
     this.adjacentBoxes.forEach( (box) => {
       box.decrementCounter(team)
     })
  }
}

export class Board {
  
  constructor(rows, cols){
    this.score = 0
    this.cols = cols
    this.rows = rows
    this.unFilledLines = ( ( rows + 1 ) * ( cols) ) + ( ( rows ) * ( cols + 1) ) 
    this.isTerminalState = false
    this.filledBoxes = 0
    this.boxes = Array.from( 
      {length: rows}, (_, row) => Array.from( 
        {length: cols}, (_, col) => new Box(this, col, row) 
      )
    )
    
    // for the algo
    this.lines = []
    
    this.verticalLines = Array.from(
      {length: rows }, (_, row) => Array.from(
        {length: cols + 1}, (_, col) => {
          const adjacentBoxes = [
            this.boxes[row]?.[col],
            this.boxes[row][col - 1]
          ].filter(Boolean)
          
          const line = new Line(this, col, row, "vertical", adjacentBoxes)
          this.lines.push(line)
          return line
        }
      )
    )
    
    this.horizontalLines = Array.from(
      {length: rows + 1 }, (_, row) => Array.from(
        {length: cols}, (_, col) => {
          const adjacentBoxes = [
            this.boxes[row]?.[col],
            this.boxes[row - 1]?.[col]
          ].filter(Boolean)
          
          const line = new Line(this, col, row, "horizontal", adjacentBoxes)
          this.lines.push(line)
          return line
        }
      )
    )
  }
}