<template>
<GlobalNavbar/>
<section class="text-gray-700">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20 ">
            <h1 class=" text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Frequently Asked Question
            </h1>
            <p class="text-base leading-relaxed mx-auto">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div class="flex flex-wrap -mx-2 border-2 border-white-900 p-[1%]">
          
          
            <div class="w-full px-4 py-2"><h1 class="text-xl">Shipping</h1>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200  py-2 px-4">
                  How do I change or cancel my order
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200  py-2 px-4">
                  How can I track my order
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200  py-2 px-4">
                  I placed an order, but never recieved a confirmation email
                </summary>
                
                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute. 
                </span>
              </details>
            </div>
            <div class="w-full px-4 py-2">
            <h1 class="text-xl">Account Management</h1>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200  py-2 px-4">
                  Signing In
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200  py-2 px-4">
                  Forgot password/username
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200  py-2 px-4">
                  Account privacy
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
            <div class="w-full px-4 py-2">
            <h1 class="text-xl">Buying/Selling</h1>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200  py-2 px-4">
                  What payment methods are accepted
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 py-2 px-4">
                  My card declined
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 py-2 px-4">
                  How do I get a refund
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200  py-2 px-4">
                  Where can I list items
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200  py-2 px-4">
                  How to get paid by Lowballd
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    <Footer />
   


</template>

<script>
import Footer from "../components/footer/Footer.vue";
import GlobalNavbar from "../components/GlobalNavbar.vue";
export default {
    name: 'Faq',
    components: {
        GlobalNavbar,
        Footer
    },
} 
</script>