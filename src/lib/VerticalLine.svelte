
<script>
  let { offsetTop = 0, offsetLeft = 0 } = $props()
  let main;
  
  export function setBackgroundColor(color){
    
    if(color == "default"){
      main.style.backgroundColor = "var(--background-800)"
    }
    main.style.backgroundColor = color
  }
</script>

<style>
  main {
    width: 5px;
    height: 50px;
    position: absolute;
    background-color: var(--background-800);
  }
</style>

<main bind:this={main} on:click style="top: {offsetTop}px; left: {offsetLeft}px;" >
  
</main>