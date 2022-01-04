<template>
    <section id="nav" class="bg-slate-100 flex flex-row ">
        <div id="logo" > 
            <h1 class="font-bold text-3xl">lowballd.</h1>
        </div>
        <div class="nav-part flex flex-row ">
            <NavPage page="Tester"/>
            <NavPage page="Testing"/>
            <NavPage page="Test"/>
        </div>
    </section>
</template>

<script>
import NavPage from '../components/Nav-Pages.vue';
export default {
    name: "Nav",
  components: { NavPage },
}

</script>