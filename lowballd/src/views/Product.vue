<template>
<ProductNavbar></ProductNavbar>
<ProductCarousel></ProductCarousel>
</template>

<script>
import ProductNavbar from '../components/product/ProductNavbar.vue'
import ProductCarousel from '../components/product/ProductCarousel.vue'


export default {
    name: 'Home',
    components: {
        ProductNavbar, ProductCarousel,
    },
}
</script>