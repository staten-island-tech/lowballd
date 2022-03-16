<template>
<!--<ProductNavbar></ProductNavbar>-->
<!--<ProductContent></ProductContent>-->
<ProductTest></ProductTest>
</template>

<script>
import ProductNavbar from '../components/product/ProductNavbar.vue'
import ProductContent from '../components/product/ProductContent.vue'
import ProductTest from '../components/product/ProductTest.vue'


export default {
    name: 'Home',
    components: {
        ProductNavbar, ProductContent, ProductTest
    },
}
</script>