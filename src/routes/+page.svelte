

<script>
  import { goto } from "$app/navigation"
</script>

<style>
  main {
    padding-top: 30px;
    gap: 50px;
    width: 100dvw;
    height: 100dvh;
  }
  
  .card {
    border-radius: 20px;
    padding: 15px;
    width: 80%;
    color: var(--text-100);
    text-align: center;
    background-color: var(--background-800);
  }
  
  .card span {
    margin-top: -25px;
    font-size: 0.9rem;
  }
  
  .card button {
    margin-top: 10px;
    height: 35px;
    width: auto;
    min-width: 100px;
    padding: 0 15px 0 15px;
    border: none;
    border-radius: 7px;
    font-weight: bold;
    color: var(--text-900);
    background-color: var(--background-100);
  }
</style>

<main class="flex-col align-center justify-start border-box">
  <div class='card flex-col align-center justify-start border-box'>
    <i class="fa-solid fa-robot" style="color: var(--text-100); font-size: 30px; margin-bottom: -20px;"></i>
    <h5> Try Playing Against The Ai!</h5>
    <span>
      it uses the minimax 
      algorithim to find the best moves so far i haven't 
      beaten it
    </span>
    <button on:click={ () => goto("/debug-board") }> Play </button>
  </div>
  
  <div class='card flex-col align-center justify-start border-box'>
    <i class="fa-solid fa-screwdriver-wrench" style="color: var(--text-100); font-size: 30px; margin-bottom: -20px;"></i>
    <h5> View The Debug Board</h5>
    <span>
      You Can See Usefull Information here
      To Help Test And Debug The Algoritm
    </span>
    <button> View Debug Board </button>
  </div>
</main>

