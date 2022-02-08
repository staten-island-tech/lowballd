<template>
<div class="pb-8">
    <h1 class="text-2xl m-10 font-bold">Description</h1>
    <p class="mx-10 -my-8 text-base text-gray-400">Write a little joke or greeting for any passerbys.</p>
    <div class="relative h-32 mb-20">
    <input class="px-4 pb-20 mx-10 my-12 w-11/12 h-32 border-solid border-2 border-black rounded-lg placeholder:" type="text" placeholder="I drink coffee. I am tiktok. My name Alston Chan. I dress well am smart am cool.">
    <div class="absolute -bottom-10 right-10">
    <p class="text-gray-400/[.7] italic text-xs">Max 150 Words</p>
    </div>
    </div>
    <h1 class="text-2xl font-bold mx-10 mt-14">Recieve Emails</h1>
        <div class="mx-10 card">
            <div class="form-control">
                <label class="cursor-pointer label">
                <span class="label-text">Lowballd Newsletter</span> 
                <input type="checkbox" checked="checked" class="toggle">
                </label>
            </div>
            <div class="form-control">
                <label class="cursor-pointer label">
                <span class="label-text">New Messages</span> 
                <input type="checkbox" checked="checked" class="toggle">
                </label>
            </div>
            <div class="form-control">
                <label class="cursor-pointer label">
                <span class="label-text">Offers Recieved</span> 
                <input type="checkbox" checked="checked" class="toggle">
                </label>
            </div>
        </div>
         <h1 class="text-2xl m-10 font-bold">Blocked Accounts</h1>
    <p class="mx-10 -my-8 text-base text-gray-400">The following usernames are blocked.</p>
</div>
</template>

<script>
    export default {
        name: 'ManageAccount',
    }
</script>