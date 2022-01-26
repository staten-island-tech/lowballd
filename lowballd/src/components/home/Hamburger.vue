<template>
    <div @click="hamburgerClicked=true" class="sm:fixed sm:rounded-xl sm:right-10 sm:top-10 z-10 text-white absolute w-10 h-10 right-20 top-20 hover:cursor-pointer">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
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