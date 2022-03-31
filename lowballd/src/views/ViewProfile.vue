<template>
<GlobalNavbar></GlobalNavbar>
<section>
    <div class="flex flex-row justify-center w-4/5 mx-auto p-10">
        <img class="rounded w-48 h-48" src="https://3.files.edl.io/aeb1/20/12/02/154937-46cc468f-b7f4-4bb3-945e-3265bdb605d4.jpg" alt="Extra large avatar">
        <div class="flex flex-col justify-center w-1/2 ml-20">
            <p class="font-bold text-3xl">mwhalen3</p>
            <p class="text-md text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="flex flex-row mt-6">
                <p class="text-lg text-slate-700 pr-4"><span class="font-bold">25</span> Posts</p>
                <p class="text-lg text-slate-700 pr-4"><span class="font-bold">15</span> Listings</p>
                <p class="text-lg text-slate-700 pr-4"><span class="font-bold">300</span> Followers</p>
                <p class="text-lg text-slate-700"><span class="font-bold">200</span> Following</p>
            </div>
            
        </div>
    </div>
</section>
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";

export default {
    name: 'ViewProfile',
    components: {
        GlobalNavbar, 
    },
}
</script>