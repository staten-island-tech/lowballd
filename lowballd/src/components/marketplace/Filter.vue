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
       <div tabindex="0" class="collapse w-96 border rounded-box border-base-300 collapse-arrow"> 
        <div class="collapse-title text-xl font-medium">
            I open with focus
        </div> 
        <div class="collapse-content"> 
            <p>Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using 
            <span class="badge badge-outline">collapse-open</span> and 
            <span class="badge badge-outline">collapse-close</span> classes.
            </p>
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