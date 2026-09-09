


<script>
  let { offsetTop = 0, offsetLeft = 0 } = $props()
  
  let main;
  export function setBackgroundColor(color){
    
    if(color == "default"){
      main.style.backgroundColor = "var(--color-background-800)"
    }
    main.style.backgroundColor = color
  }
  
</script>

<main bind:this={main} on:click class="absolute h-[5px] w-[50px] bg-background-800" style="top: {offsetTop}px; left: {offsetLeft}px;" >
  
</main>
