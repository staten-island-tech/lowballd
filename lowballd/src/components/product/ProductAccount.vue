<template>
<div class="flex flex-row">
    <div class="avatar pl-4 pt-4">
        <div class="rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGBvBlLy-uljw/profile-displayphoto-shrink_200_200/0/1610509335728?e=1648684800&v=beta&t=u9GCzx6GctOLBqOeRB1Z9Jv7aBXeb8XZrHCyvFBA-qw">
        </div>
    </div> 
    <div class="p-4">
        <h1 class="text-xl font-bold">Alston Chan</h1>
        <p class="text-slate-500 text-sm">Staten Island, NY</p>
        <div class="rating">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning"> 
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning"> 
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning"> 
            <input type="radio" name="rating-2" checked="checked" class="mask mask-star-2 bg-warning"> 
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning">
            <p>(483)</p>
        </div>
        <a href="#" class="text-blue-600 visited:text-purple-600">Message Seller</a>
    </div>
</div>

<h1 class="font-bold text-2xl p-4 text-center">US $125</h1>
<button class="btn btn-lg btn-wide w-[30rem]">BUY</button>
<div class="flex flex-col w-full pt-12">
    <div class="flex justify-between">
        <div class="grid font-bold">Size</div> 
        <h1 class="text-slate-700 text-right">Small</h1>
    </div>
        <div class="divider"></div> 
    <div class="flex justify-between">
        <div class="grid font-bold">Brand</div>
        <h1 class="text-slate-700 text-right">Nike</h1>
    </div>
        <div class="divider"></div> 
    <div class="flex justify-between">
        <div class="grid font-bold">Condition</div>
        <h1 class="text-slate-700 text-right">Brand New</h1>
    </div>
        <div class="divider"></div>
    <div class="flex justify-between"> 
        <div class="grid font-bold">Style</div>
        <h1 class="text-slate-700 text-right">High Top Jordan Air</h1>
    </div>
        <div class="divider"></div>
    <div class="flex justify-between"> 
        <div class="grid font-bold">Color</div>
        <h1 class="text-slate-700 text-right">Red-Black</h1>
    </div>
        <div class="divider"></div> 
    <div class="flex justify-between">
        <div class="grid font-bold">Shipping</div>
        <h1 class="text-slate-700 text-right">Free</h1>
    </div>
        <div class="divider"></div>
  
</div>

</template>

<script>
export default {
        name: 'ProductAccount',
    }
</script>