<template>
    <div class="w-60 sm:w-full sm:flex sm:flex-col sm:items-center capitalize ">
       <div class="sm:w-10/12 h-auto bg-gray-200 p-3 mb-5 rounded-xl ">
           <div class="flex flex-col">
               <FilterCategory filterCategory='sort'/>
                <FilterBtn filterBtn='sort'/>
                <FilterBtn filterBtn='sort2'/>
           </div>
       </div>
       <div class="sm:w-10/12 h-auto bg-gray-200 p-3 mb-5 rounded-xl ">
           <div class="flex flex-col">
               <FilterCategory filterCategory='Filler'/>
                <FilterBtn filterBtn='hi'/>
                <FilterBtn filterBtn='hi'/>
           </div>
           <div class="flex flex-col">
               <FilterCategory filterCategory='Filler'/>
                <FilterBtn filterBtn='hi'/>
                <FilterBtn filterBtn='hi'/>
           </div>
           <div class="flex flex-col">
               <FilterCategory filterCategory='Color'/>
                <FilterBtn filterBtn='Blue'/>
                <FilterBtn filterBtn='Beige'/>
           </div>
           <div class="flex flex-col">
               <FilterCategory filterCategory='Price'/>
                <FilterBtn filterBtn='High to Low'/>
                <FilterBtn filterBtn='Low to High'/>
           </div>
       </div>
    </div>

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
    data () {
        return {
            filterClicked: false,
        }
    },
}

</script>