<template>
<div class="flex flex-row">
    <h1 class="text-2xl m-12">Your Watchlist/Wishlist</h1>
        <div class="form-control pt-10 pr-4">
            <div class="input-group">
                <select class="select select-bordered">
                <option disabled selected>Sort By</option>
                <option>Date (Newest to Oldest)</option>
                <option>Date (Oldest to Newest)</option>
                <option>Price (High to Low)</option>
                <option>Price (Low to High)</option>
                </select>
                <button class="btn">Go</button>
            </div>
        </div>
        <div class="form-control pt-10">
            <div class="input-group">
                <input type="text" placeholder="Search…" class="input input-bordered">
                <button class="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>
</div>
<WatchlistProduct></WatchlistProduct>
<WatchlistProduct></WatchlistProduct>
<WatchlistProduct></WatchlistProduct>
<WatchlistProduct></WatchlistProduct>
</template>

<script>
import WatchlistProduct from "./WatchlistProduct.vue";

    export default {
        name: 'ProfileWatchlist',
        components: {
        WatchlistProduct,
  },
    }
    
</script>