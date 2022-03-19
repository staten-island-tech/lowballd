<template>
<div class="w-1/5 my-16">
    <div class="card text-center shadow-lg bg-sky-500">
    <div class="my-2"></div>
        <div class="avatar mx-auto my-4">
            <div class="rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img :src='profile_data.user_picture'>
            </div>
        </div> 
    <h1 class="text-2xl">{{ profile_data.user_fullname }}</h1>
    <h1 class="text-base">{{ profile_data.user_email }}</h1>
    <div class="py-6">
        <button class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100">Posts</button>
        <button class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100">Manage Account</button>
        <button class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100">Your Purchases</button>
        <button class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100">Watchlist</button>
        <button class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100">Bid Offers</button>
        <button class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100">Settings</button>
        </div>
    </div> 
</div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'ProfileCard',
        data() {
            return {
                profile_data: [],
            }
        },
        async created() {
            try {
            const res = await axios.get(`http://localhost:3001/profiledata`);
                this.profile_data = res.data[0];
                console.log(res.data[0])
            } catch (error) {
                console.log(error);
            }
        },
    }
</script>