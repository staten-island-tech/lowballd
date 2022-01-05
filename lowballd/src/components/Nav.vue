<template>
    <section id="nav" class="bg-slate-100 flex flex-row justify-between">
        <div id="logo" > 
            <h1 class="font-bold text-3xl">lowballd.</h1>
        </div>
        <div class="nav-part flex flex-row justify-end mr-4">
            <NavPage page="Feed"/>
            <NavPage page="MarketPlace"/>
            <NavPage page="chat"/>
            <NavPage page="login"/>
            <NavPage page="cart"/>
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