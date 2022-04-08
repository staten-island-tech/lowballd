<template>
<GlobalNavbar />
<FeedComponent></FeedComponent>
<Footer />
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import FeedComponent from '../components/Feed/FeedComponent.vue'
import Footer from "../components/footer/Footer.vue";
export default {
    name: 'Home',
    components: {
        GlobalNavbar, FeedComponent, Footer
    },
    

    
}




</script>





