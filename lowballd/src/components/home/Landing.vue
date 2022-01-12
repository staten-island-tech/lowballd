<template>
    <div class="h-screen w-full bg-slate-600 flex flex-col justify-around items-center">
        <div class="h-24 w-24"></div>
        <div class="text-center w-3/5">
            <h1 class="text-9xl text-white font-['Work_Sans'] font-extrabold">lowballd.</h1>
            <h2 class="p-6 text-xl text-white font-['Work_Sans'] font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
        <div class="h-24 w-24 text-white hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Landing',
    }
</script>