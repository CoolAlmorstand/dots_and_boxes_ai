

<script>

  import { createEventDispatcher } from "svelte"
  import { minimax } from "$algorithm/minimax.js"

  import Box from "$lib/Box.svelte"
  import HorizontalLine from "$lib/HorizontalLine.svelte"
  import VerticalLine from "$lib/VerticalLine.svelte"
  import CornerDot from "$lib/CornerDot.svelte"
  
  import { Board } from "$lib/board.js"
  
  let {
    cols = 5, 
    rows = 5, 
    padding = 20, 
    scoreCard = null
  } = $props()
  
  let width = ( cols * 50 ) + ( (cols + 1 ) * 5) + ( padding * 2)
  let height = ( rows * 50 ) + ( (rows + 1) * 5) + ( padding * 2)
  
  let boxes = Array.from({ length: rows }, () => [])
  let horizontalLines = Array.from({ length: rows + 1 }, () => [])
  let verticalLines = Array.from({ length: rows }, () => [])
  let lastClickedLine = null
  
  let currentTeam = "team1"
  
  let board = new Board(rows, cols)
  
  const dispatch = createEventDispatcher()
  
  
  function getAiMove(){
    const info = { totalPositions: 0 }
    
    const depth = Math.floor( Math.log(8_000_000_000 ) / Math.log(board.unFilledLines) )
    
    const {move, newEval} = minimax(board, depth, true, info)
    
    console.log(`depth: ${depth}`)
    console.log(`eval: ${newEval}`)
    console.log(`totalPositions: ${info.totalPositions}`)
    
      
      
    const { col, row, orientation } = move
    currentTeam = "team2"
    lineClick(col, row, orientation, false)
    currentTeam = "team1"
  }
  
  function lineClick(col, row, orientation, isMadeByHuman = true){
    
    const line = orientation == "horizontal" ? board.horizontalLines[row][col] : board.verticalLines[row][col]
    const uiLine = orientation == "horizontal" ? horizontalLines[row][col] : verticalLines[row][col]
    
    if(line.state != "empty") { return }
    
    if(currentTeam == "team1"){
      uiLine.setBackgroundColor("blue")
    }
    else if(currentTeam == "team2"){
      uiLine.setBackgroundColor("red")
    }
    
    const hasFormedBox = line.fillLine(currentTeam)
    
    line.adjacentBoxes.forEach( (box) => {
      if(box.state == "team1"){
        const { col, row } = box
        boxes[row][col].setBackgroundColor("var(--color-secondary-500)")
        dispatch("scoreUpdate", {score: board.score})
      }
      if(box.state == "team2"){
        const { col, row } = box
        boxes[row][col].setBackgroundColor("rgb(180,100,100)")
        dispatch("scoreUpdate", {score: board.score})
      }
    })
    
    if(lastClickedLine){
      lastClickedLine.setBackgroundColor("var(--color-text-100)")
    }
    
    lastClickedLine = uiLine
    
    if(isMadeByHuman && currentTeam == "team1" ) { getAiMove() }
    
    //if(!hasFormedBox) {
    //currentTeam = currentTeam == "team2" ? "team1" : "team2"
    //}
    
    
  }
  
</script>

<main style="width: {width}px; height: {height}px" class="relative mt-[50px] max-w-[95%] overflow-auto rounded-[20px] bg-background-800 scrollbar-none">
  <!-- add boxes -->
  {#each Array(rows) as _, row}
    {#each Array(cols) as _, col}
      <Box bind:this={boxes[row][col] } offsetTop={ ( row * 55 ) + 5 + padding} offsetLeft={ ( col * 55 ) + 5 + padding } />
    {/each}
  {/each}
  
  <!-- add horizontal lines -->
  {#each Array(rows + 1) as _, row}
    {#each Array(cols) as _, col}
      <HorizontalLine on:click={() => lineClick(col, row, "horizontal" ) } bind:this={ horizontalLines[row][col] } offsetTop={ ( row * 55 ) + padding} offsetLeft={ ( col * 55 ) + 5 + padding } />
    {/each}
  {/each}
  
    <!-- add horizontal lines -->
  {#each Array(rows) as _, row}
    {#each Array(cols + 1) as _, col}
      <VerticalLine bind:this={ verticalLines[row][col] } on:click={() => lineClick(col, row, "vertical" ) } offsetTop={ ( row * 55 ) + 5 + padding} offsetLeft={ ( col * 55 ) + padding } />
    {/each}
  {/each}
  
  <!-- add corner dots -->
  {#each Array(rows + 1) as _, row}
    {#each Array(cols + 1) as _, col}
      <CornerDot offsetTop={ ( row * 55 ) + padding - 2.5} offsetLeft={ ( col * 55 ) + padding - 2.5 } />
    {/each}
  {/each}
</main>
