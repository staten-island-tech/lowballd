<template>
<div class="pb-8">
    <h1 class="text-2xl m-10 font-bold">Description</h1>
    <p class="mx-10 -my-8 text-base text-gray-400">Write a little joke or greeting for any passerbys.</p>
    <div class="relative h-32 mb-16">
    <input class="px-4 pb-20 mx-10 my-12 w-11/12 sm:w-5/6 h-32 border-solid border-2 border-black rounded-lg placeholder:" type="text" placeholder="I drink coffee. I am tiktok. My name Alston Chan. I dress well am smart am cool.">
    <div class="absolute -bottom-10 right-14 sm:right-10">
    <p class="text-gray-400/[.7] italic text-xs">Max 150 Words</p>
    </div>
    </div>
            <!--<button class="btn w-28 mx-24 -my-12">Save
                <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 3h2.996v5h-2.996v-5zm11 1v20h-24v-24h20l4 4zm-17 5h10v-7h-10v7zm15-4.171l-2.828-2.829h-.172v9h-14v-9h-3v20h20v-17.171z"/></svg>
            </button>-->
    <h1 class="text-2xl font-bold mx-10 mt-20">Recieve Emails</h1>
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