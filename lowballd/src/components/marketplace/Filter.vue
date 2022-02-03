<template>
    <div class="w-60 h-auto bg-gray-100 rounded-xl capitalize sm:w-11/12 sm:mx-auto " >
        <div class='flex flex-col '>
            <div class="collapse collapse-arrow w-full rounded-xl">
                <input type="checkbox"> 
                <div class="collapse-title">
                    <FilterCategory filterCategory='Color'/>
                </div> 
                <div class="collapse-content"> 
                    <FilterBtn filterBtn='All'/>
                    <FilterBtn filterBtn='White'/>
                    <FilterBtn filterBtn='Black'/>
                </div>
            </div> 
            <div class="collapse collapse-arrow w-full rounded-xl">
                <input type="checkbox"> 
                <div class="collapse-title">
                    <FilterCategory filterCategory='Price'/>
                </div> 
                <div class="collapse-content"> 
                    <FilterBtn filterBtn='High to Low'/>
                    <FilterBtn filterBtn='Low to High'/>
                </div>
            </div> 
            <div class="collapse collapse-arrow w-full rounded-xl">
                <input type="checkbox"> 
                <div class="collapse-title">
                    <FilterCategory filterCategory='Color'/>
                </div> 
                <div class="collapse-content"> 
                    <FilterBtn filterBtn='Beige'/>
                    <FilterBtn filterBtn='Beige'/>
                    <FilterBtn filterBtn='Beige'/>
                </div>
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