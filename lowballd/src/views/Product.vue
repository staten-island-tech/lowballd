<template>
<GlobalNavbar />
<!--<ProductContent></ProductContent>-->
<ProductTest></ProductTest>
<Footer />
</template>

<script>
import Footer from "../components/footer/Footer.vue";
import GlobalNavbar from "../components/GlobalNavbar.vue";
import ProductContent from '../components/product/ProductContent.vue'
import ProductTest from '../components/product/ProductTest.vue'

export default {
    name: 'Home',
    components: {
        GlobalNavbar, ProductContent, ProductTest, Footer,
    },
}
</script>