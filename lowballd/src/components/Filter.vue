<template>
    <section class="w-[10rem] ">
       <div class=" h-auto bg-gray-300 p-3 my-2">
           <h1>Sort</h1>
           <div class="">
                <FilterCol filterBtn='sort'/>
                <FilterCol filterBtn='sort2'/>
           </div>
       </div>
       <div class=" h-auto bg-gray-300 p-3 my-2">
           <h1>Sweater</h1>
           <div class="">
                <FilterCol filterBtn='hi'/>
                <FilterCol filterBtn='hi'/>
           </div>
           <h1>Jean</h1>
           <div class="">
                <FilterCol filterBtn='hi'/>
                <FilterCol filterBtn='hi'/>
           </div>
           <h1>Price</h1>
           <div class="">
                <FilterCol filterBtn='hi'/>
                <FilterCol filterBtn='hi'/>
           </div>
       </div>
    </section>
</template>

<script>
import FilterCol from '../components/Filter-Col.vue';
export default {
    name: "Filter",
    components: { FilterCol },
    props: [
        'filterBtn',

    ]

}

</script>