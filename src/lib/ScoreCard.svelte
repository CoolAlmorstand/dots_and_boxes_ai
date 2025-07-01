



<script>
  
  let score = 0
  
  export function updateScore(newScore){
    score = newScore
  }
</script>


<style>
  main {
    height: 30px;
    padding: 0 7px 0 7px;
    border-radius: 10px;
    background-color: var(--background-800);
    color: var(--text-100);
  }
  
  h5 {
    margin: 0;
  }
</style>

<main class="flex-col border-box justify-center">
  <h5>Score: {score}</h5>
</main>