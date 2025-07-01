

<script>
  import Board from "$lib/Board.svelte"
  import ScoreCard from "$lib/ScoreCard.svelte"
  
  let scoreCardRef;
</script>

<style>
  main {
    padding-top: 30px;
  }
  
</style>

<main class="flex-col align-center justify-start border-box">
  <ScoreCard bind:this={scoreCardRef} />
  <Board on:scoreUpdate={(event) =>  scoreCardRef.updateScore(event.detail.score) } />
</main>