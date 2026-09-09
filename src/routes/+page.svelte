

<script>
  import { goto } from "$app/navigation"
</script>

<main class="flex h-dvh w-dvw flex-col items-center justify-start gap-[50px] pt-[30px]">
  <div class="flex w-4/5 flex-col items-center justify-start gap-2.5 rounded-[20px] bg-background-800 p-[15px] text-center text-text-100">
    <i class="fa-solid fa-robot mb-[-20px] text-[30px] text-text-100"></i>
    <h5> Try Playing Against The Ai!</h5>
    <span class="mt-[-25px] text-[0.9rem]">
      it uses the minimax 
      algorithim to find the best moves so far i haven't 
      beaten it
    </span>
    <button class="mt-[10px] h-[35px] min-w-[100px] rounded-[7px] border-0 bg-background-100 px-[15px] font-bold text-text-900" on:click={ () => goto("/debug-board") }> Play </button>
  </div>
  
  <div class="flex w-4/5 flex-col items-center justify-start gap-2.5 rounded-[20px] bg-background-800 p-[15px] text-center text-text-100">
    <i class="fa-solid fa-screwdriver-wrench mb-[-20px] text-[30px] text-text-100"></i>
    <h5> View The Debug Board</h5>
    <span class="mt-[-25px] text-[0.9rem]">
      You Can See Usefull Information here
      To Help Test And Debug The Algoritm
    </span>
    <button class="mt-[10px] h-[35px] min-w-[100px] rounded-[7px] border-0 bg-background-100 px-[15px] font-bold text-text-900"> View Debug Board </button>
  </div>
</main>
