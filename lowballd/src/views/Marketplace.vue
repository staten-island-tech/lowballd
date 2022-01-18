<template>
    <section class="marketplace w-screen ">
        <Navbar2></Navbar2>
        <div class="flex flex-row">
          <div class="flex flex-col">
            <Filter />
          </div>
          <div class="flex flex-row flex-wrap w-[100rem]">
              <Card />
          </div>
        </div>
        
    </section>

</template>

<script>
import Navbar2 from '../components/Navbar2.vue';
import Card from '../components/Card.vue';
import Filter from '../components/Filter.vue';
export default {
  components: { Navbar2, Card, Filter},

}
</script>
