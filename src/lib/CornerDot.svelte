



<script>
  
  let { offsetTop = 0 , offsetLeft = 0 } = $props()
  
</script>


<style>
  main {
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: var(--text-100);
    border-radius: 5px;
  }
</style>

<main style="top: {offsetTop}px; left: {offsetLeft}px">
  
</main>