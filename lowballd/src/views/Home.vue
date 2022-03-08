<template>
    <div class="font-Spartan">
        <Navbar> </Navbar>
        <div class="w-1/3 m-12">
            <p class="font-normal mb-1">— NOW PRESENTING</p>
            <h1 class="font-bold text-6xl mb-4">Lowballd</h1>
            <h2 class="font-light text-lg">An innovative fashion marketplace. A brand new social media.</h2>
            <div class="mt-6 py-5 px-2 border-b border-gray-300">
            <div class="flex">
                <div class="flex w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400 pb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" class="focus:outline-none pl-4 w-full" placeholder="Search for your next wardrobe addition">
                </div>
                <div class="flex items-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 448 512">
                    <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/>
                    </svg>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/home/Navbar.vue';
export default {
    name: 'Home',
    components: {
        Navbar
    },
}
</script>