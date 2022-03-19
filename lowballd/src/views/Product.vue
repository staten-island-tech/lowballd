<template>
<GlobalNavbar />
<!--<ProductContent></ProductContent>-->
<ProductTest></ProductTest>
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import ProductContent from '../components/product/ProductContent.vue'
import ProductTest from '../components/product/ProductTest.vue'

export default {
    name: 'Home',
    components: {
        GlobalNavbar, ProductContent, ProductTest,
    },
}
</script>