<template>
<div>
    <h1 class="text-2xl font-bold mx-10 mt-10">Recieve Emails</h1>
        <div class="mx-10 py-4 flex flex-col">
            <label for="checked-newsletter" class="relative inline-flex items-center cursor-pointer mb-2">
                <input type="checkbox" value="" id="checked-newsletter" class="sr-only peer" checked>
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Lowballd Newsletter</span>
            </label>
            <label for="checked-messages" class="relative inline-flex items-center cursor-pointer mb-2">
                <input type="checkbox" value="" id="checked-messages" class="sr-only peer" checked>
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">New Messages</span>
            </label>
            <label for="checked-recieved" class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" id="checked-recieved" class="sr-only peer" checked>
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Offers Received</span>
            </label>
        </div>
</div>
</template>

<script>
    export default {
        name: 'Settings',
    }
    
</script>