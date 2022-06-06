<template>
<div class="mx-auto flex flex-wrap -mx-3 overflow-hidden">
    <ListingSquare
        v-for="item in listings"
            :productId="item._id"
            :listingImage="item.images[0]"
            :category="item.category"
            :title="item.title"
            :price="item.price"
    ></ListingSquare>
</div>
</template>

<script>
import ListingSquare from "./ListingSquare.vue";

export default {
    name: 'ListingGrid',
    components: {
        ListingSquare,
    },
    data() {
        return {
            currentUserId: null,
            listings: null,
        }
    },
    props: {
        userId: null,
    },
    mounted() {
        this.currentUserId = this.userId;
        this.getUserPosts();
    },
    methods: {
        async getUserPosts() {
            try {
                const response = await fetch(
                `https://lowballd-backend.onrender.com/api/market/profile/${this.userId}`
                );
                const data = await response.json();
                console.log(data)
                this.listings = data;
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>