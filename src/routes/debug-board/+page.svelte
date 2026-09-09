

<script>
  import Board from "$lib/Board.svelte"
  import ScoreCard from "$lib/ScoreCard.svelte"
  
  let scoreCardRef;
</script>

<main class="flex flex-col items-center justify-start gap-2.5 pt-[30px]">
  <ScoreCard bind:this={scoreCardRef} />
  <Board on:scoreUpdate={(event) =>  scoreCardRef.updateScore(event.detail.score) } />
</main>
