<template>
<div class="flex flex-row">
    <div class="avatar pl-4 pt-4">
        <div class="rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGBvBlLy-uljw/profile-displayphoto-shrink_200_200/0/1610509335728?e=1648684800&v=beta&t=u9GCzx6GctOLBqOeRB1Z9Jv7aBXeb8XZrHCyvFBA-qw">
        </div>
    </div> 
    <div>
        <h1>Alston Chan</h1>
    </div>
</div>
<div class="rating pt-12">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning"> 
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning"> 
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning"> 
  <input type="radio" name="rating-2" checked="checked" class="mask mask-star-2 bg-warning"> 
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning">
</div>

</template>

<script>
export default {
        name: 'ProductAccount',
    }
</script>