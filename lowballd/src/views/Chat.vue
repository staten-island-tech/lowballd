<template>
    <GlobalNavbar />
    <div class="flex justify-center h-[40rem]">
        <div class="w-1/5 bg-gray-50">
            <div class="w-full h-12 bg-gray-100 text-center flex flex-col justify-center">
                <p class="text-lg">Your Inbox</p>
            </div>
            <ul class="flex border-b border-gray-100">
            <li class="flex-1">
                <a class="relative block p-4" href="">
                    <span class="absolute inset-x-0 w-full h-px bg-blue-600 -bottom-px"></span>
                <div class="flex items-center justify-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                    </svg>

                    <span class="ml-3 text-sm font-medium text-gray-900"> Messages </span>
                </div>
                </a>
            </li>

            <li class="flex-1">
                <a class="relative block p-4" href="">
                <div class="flex items-center justify-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                    </svg>

                    <span class="ml-3 text-sm font-medium text-gray-900"> Archived </span>
                </div>
                </a>
            </li>
            </ul>
            <div class="h-[34rem] overflow-scroll">
                <ChatUserPreview></ChatUserPreview>
                <ChatUserPreview></ChatUserPreview>
                <ChatUserPreview></ChatUserPreview>
                <ChatUserPreview></ChatUserPreview>
                <ChatUserPreview></ChatUserPreview>
                <ChatUserPreview></ChatUserPreview>
                <ChatUserPreview></ChatUserPreview>
                <ChatUserPreview></ChatUserPreview>
                <ChatUserPreview></ChatUserPreview>
                <ChatUserPreview></ChatUserPreview>
                <ChatUserPreview></ChatUserPreview>
                <ChatUserPreview></ChatUserPreview>
            </div>
        </div>
        <div class="w-3/5 px-4">
            <ChatBox></ChatBox>
        </div>
    </div>
    <Footer />
</template>

<script>
import Footer from "../components/footer/Footer.vue";
import ChatUserPreview from "../components/chat/ChatUserPreview.vue";
import ChatBox from "../components/chat/ChatBox.vue";
import GlobalNavbar from "../components/GlobalNavbar.vue";

export default {
    name: 'Chat',
    components: {
        GlobalNavbar, ChatUserPreview, ChatBox, Footer
    },
}

</script>





