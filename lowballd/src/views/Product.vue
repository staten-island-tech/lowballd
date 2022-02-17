<template>
<ProductNavbar></ProductNavbar>
<ProductContent></ProductContent>
</template>

<script>
import ProductNavbar from '../components/product/ProductNavbar.vue'
import ProductContent from '../components/product/ProductContent.vue'


export default {
    name: 'Home',
    components: {
        ProductNavbar, ProductContent,
    },
}
</script>