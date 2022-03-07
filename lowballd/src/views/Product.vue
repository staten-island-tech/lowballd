<template>
<Navbar></Navbar>
<ProductCarousel></ProductCarousel>
</template>

<script>
import Navbar from '../components/home/Navbar.vue'
import ProductCarousel from '../components/product/ProductCarousel.vue'


export default {
    name: 'Home',
    components: {
        Navbar, ProductCarousel,
    },
}
</script>