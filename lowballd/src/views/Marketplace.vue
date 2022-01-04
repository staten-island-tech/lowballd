<template>
    <div class="marketplace">
        <Nav />
        <div class="right">
            <Card />
        </div>
        
    </div>

</template>

<script>
import Nav from '../components/Nav.vue';
import Card from '../components/Card.vue';
export default {
  components: { Nav,Card },
}
</script>
