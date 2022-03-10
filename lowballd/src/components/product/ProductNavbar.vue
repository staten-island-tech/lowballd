<template>
<div class="w-full h-14 flex flex-row justify-between px-8 pt-4">
            <h1 class="text-xl">Lowballd</h1>
            <div>
                <router-link to="feed" class="px-6">
                    Feed
                </router-link>
                <router-link to="marketplace" class="px-6">
                    Marketplace
                </router-link>
            </div>
            <h1>LOG IN</h1>
        </div>
</template>

<script>
    export default {
        name: 'ProductNavbar',
}
</script>