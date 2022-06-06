<template>
<div class="mx-auto flex flex-wrap -mx-3 overflow-hidden">
    <PostSquare v-for="post in posts" :postImage="post.images[0]" :postDate="post.date.slice(4,-42)"></PostSquare>
</div>
</template>

<script>
import PostSquare from './PostSquare.vue'
export default {
    name: 'PostGrid',
    components: {
        PostSquare,
    },
    data() {
        return {
            currentUserId: null,
            posts: null,
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
                `https://lowballd-backend.onrender.com/api/posts/profile/${this.userId}`
                );
                const data = await response.json();
                console.log(data)
                this.posts = data;
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>