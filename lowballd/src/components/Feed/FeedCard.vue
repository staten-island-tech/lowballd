<template>
<body class="flex justify-center items-center min-h-full">
  <div class="position: relative; h-[400px] w-[360px] bg-slate-200 shadow-slate-500 p-[20px]">
    <div class="flex justify-content: space-between items-center">
      <div class="flex items-center">
        <div class="relative"> 
          <div>
            <img>
          </div>
        </div>
      </div>
    </div> 
  </div>
</body>
</template>


<script>
 
    export default {
      props:['name'],
        name: 'FeedCard',
    };

</script>