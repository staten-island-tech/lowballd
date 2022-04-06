<template>
<body class="flex justify-center items-center">
  <div class="relative w-[22.5rem] h-[25rem] bg-slate-200 shadow-slate-500 p-[20px] flex justify-between items-center flex items-center">
    <div class="flex justify-between items-center flex items-center">
      <div class="flex items-center">
        <div class="relative w-[36px] h-[36px] rounded-[50%] truncate mr-[8px]"> 
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