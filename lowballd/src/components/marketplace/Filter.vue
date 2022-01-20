<template>
    <section class="w-60 capitalize ">
       <div class="h-auto bg-gray-300 p-3 mb-5 rounded-xl">
           <FilterCategory filterCategory='sort'/>
           <div class="mb-4">
                <FilterBtn filterBtn='sort'/>
                <FilterBtn filterBtn='sort2'/>
           </div>
       </div>
       <div class=" h-auto bg-gray-300 p-3 rounded-xl">
           <FilterCategory filterCategory='Fillter'/>
           <div class=" mb-4">
                <FilterBtn filterBtn='hi'/>
                <FilterBtn filterBtn='hi'/>
           </div>
            <FilterCategory filterCategory='Color'/>
           <div class="mb-4">
                <FilterBtn filterBtn='Blue'/>
                <FilterBtn filterBtn='Beige'/>
           </div>
            <FilterCategory filterCategory='Price'/>
           <div class="mb-4">
                <FilterBtn filterBtn='High to Low'/>
                <FilterBtn filterBtn='Low to High'/>
           </div>
       </div>
    </section>
</template>

<script>
import FilterBtn from './Filter-Btn.vue';
import FilterCategory from '../marketplace/Filter-Category.vue';
export default {
    name: "Filter",
    components: { FilterBtn, FilterCategory, },
    props: [
        'filterBtn', 'filterCategory',
    ],
}

</script>