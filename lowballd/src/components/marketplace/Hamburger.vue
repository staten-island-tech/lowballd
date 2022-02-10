<template>
    <div @click="hamburgerClicked=true" class="sm:flex hidden">
        <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
        </svg>
        </button>
    </div>

    <div v-show="hamburgerClicked">
        <div @click="hamburgerClicked=false" class="fixed left-0 w-4/5 h-screen opacity-50 animate__slideInRight">
        </div>
        <div class="fixed z-50 right-0 w-80 h-screen bg-gray-50 font-['Work_Sans'] text-lg flex flex-col text-center animate__animated animate__slideInRight z-20">
            <h1 class="text-4xl text-slate-800 font-['Spectral'] font-bold py-16">lowballd.</h1>
            <div class="h-1 w-4/5 bg-slate-800 mx-auto mb-12"></div>
            <ul class="text-xl text-slate-800 h-1/5 flex flex-col justify-around mb-12">
                <li><router-link to="about">ABOUT</router-link></li>
                <li><router-link to="feed">FEED</router-link></li>
                <li><router-link to="marketplace">MARKETPLACE</router-link></li>
            </ul>
            <div class="h-1 w-4/5 bg-slate-800 mx-auto mb-12"></div>
            <h1 class="text-xl text-slate-800 font-['Work_Sans'] font-bold">Log In / Sign Up</h1>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Hamburger',
        data () {
            return {
                hamburgerClicked: false,
            }
        },
    }
    
</script>