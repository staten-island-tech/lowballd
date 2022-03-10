<template>
<FeedNavbar></FeedNavbar>
<FeedComponent></FeedComponent>



</template>

<script>
import FeedNavbar from '../components/Feed/FeedNavbar.vue'
import FeedComponent from '../components/Feed/FeedComponent.vue'
export default {
    name: 'Home',
    components: {
        FeedNavbar, FeedComponent
    },
}




</script>





