<template>
<GlobalNavbar />
<FeedComponent></FeedComponent>

</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import FeedComponent from '../components/Feed/FeedComponent.vue'


export default {
    name: 'Home',
    components: {
        GlobalNavbar, FeedComponent
    },
}




</script>





