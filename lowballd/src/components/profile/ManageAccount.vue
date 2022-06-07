<template>
  <div class="pb-8 border-current">
    <p class="text-2xl m-10 font-bold">Manage Profile</p>
    <p class="mx-10 -mt-8 text-base text-gray-400 mb-6">
      Manage how your profile will appear to others.
    </p>
    <div class="w-11/12 mx-auto flex justify-center h-auto mt-1 mb-4">
      <div class="flex w-1/2 justify-around">
        <label
          for="change-username"
          class="text-lg mr-2 flex flex-col justify-center"
          >Username</label
        >
        <input
          v-model="username"
          id="change-username"
          class="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your username"
          required
        />
      </div>

      <div class="flex w-1/2 justify-around ml-8">
        <label for="location" class="text-lg mr-2 flex flex-col justify-center"
          >Location</label
        >
        <input
          v-model="location"
          id="location"
          class="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ex. New York, NY"
          required
        />
      </div>
    </div>
    <p class="text-lg ml-10">Description</p>
    <div class="relative h-auto">
      <textarea
        v-model="description"
        id="description"
        name="description"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block mx-auto w-11/12 sm:w-5/6 sm:text-sm border border-gray-300 rounded-md"
        placeholder="Maximum 150 words."
      ></textarea>
    </div>
    <div class="mt-6">
      <button
        @click="updateUserInfo"
        type="button"
        class="w-11/12 sm:w-5/6 mx-10 sm:focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import "flowbite";
import axios from "axios";

export default {
  name: "ManageAccount",
  props: {
    userId: null,
  },
  data() {
    return {
      username: null,
      location: null,
      description: null,
    };
  },
  beforeUpdate() {
    console.log(this.userId);
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/user/${this.userId}`
        );
        const data = await response.json();
        this.username = data.username;
        this.location = data.location;
        this.description = data.description;
      } catch (error) {
        console.log(error);
      }
    },
    async updateUserInfo() {
      const updatedUserData = {
        username: `${this.username}`,
        location: `${this.location}`,
        description: `${this.description}`,
      };
      try {
        const res = await axios.patch(
          `https://lowballd-backend.onrender.com/api/user/update/${this.userId}`,
          updatedUserData
        );
        this.$swal({
          icon: "success",
          title: "Your profile has been updated!",
          text: "you can now view it once the page refreshes",
        });
      } catch (error) {
        console.log(error);
      }

      if (
        this.username.length < 1 ||
        this.location.length < 1 ||
        this.description.length < 1
      ) {
        alert("Please fill in all fields.");
      }
    },
  },
};
</script>
