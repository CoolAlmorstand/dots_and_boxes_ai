



<script>
  
  let score = 0
  
  export function updateScore(newScore){
    score = newScore
  }
</script>


<main class="flex h-[30px] flex-col justify-center gap-2.5 rounded-[10px] bg-background-800 px-[7px] text-text-100">
  <h5 class="m-0">Score: {score}</h5>
</main>
