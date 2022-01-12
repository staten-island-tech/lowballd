<template>
    <div class="marketplace w-screen">
        <Nav />
        <div class="flex flex-row m-5">
          <div class="flex flex-col">
            <Filter />
          </div>
          <div class="flex flex-row flex-wrap w-2/3">
              <Card />
              <Card />
              <Card />
              <Card />
          </div>
        </div>
        
    </div>

</template>

<script>
import Nav from '../components/Nav.vue';
import Card from '../components/Card.vue';
import Filter from '../components/Filter.vue';
export default {
  components: { Nav, Card, Filter},

}
</script>
