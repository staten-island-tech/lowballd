<template>
    <div class="marketplace w-screen">
        <Nav />
        <div class="flex flex-row flex-wrap w-2/3">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        
    </div>

</template>

<script>
import Nav from '../components/Nav.vue';
import Card from '../components/Card.vue';
export default {
  components: { Nav, Card },
}
</script>
