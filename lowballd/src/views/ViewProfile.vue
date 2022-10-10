<template>
  <transition name="fade">
    <div
      v-if="showFollowerModal"
      class="-mt-16 fixed z-10 inset-0 overflow-y-auto"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          @click="showFollowerModal = false"
          class="fixed inset-0 transition-opacity"
        >
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
        >&#8203;
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="p-10 h-[24rem] w-[30rem]">
            <h1 class="text-2xl mb-4">Followers ({{ followers }})</h1>
            <div class="overflow-scroll h-4/6 w-full">
              <div
                @click="(showFollowerModal = false), this.$router.go()"
                v-for="follower in completeFollowerList"
                class="my-4 hover:cursor-pointer"
              >
                <router-link :to="'/profiles/' + follower[0]">
                  <div class="hover:cursor-pointer flex items-center space-x-2">
                    <img
                      class="w-10 h-10 cover rounded-full"
                      :src="follower[2]"
                    />
                    <h2 class="text-gray-800 font-bold cursor-pointer">
                      {{ follower[1] }}
                    </h2>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div
            class="flex justify-between bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
          >
            <div></div>
            <span
              class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                @click="showFollowerModal = false"
              >
                Close
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <transition name="fade">
    <div
      v-if="showFollowingModal"
      class="-mt-16 fixed z-10 inset-0 overflow-y-auto"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          @click="showFollowingModal = false"
          class="fixed inset-0 transition-opacity"
        >
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
        >&#8203;
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="p-10 h-[24rem] w-[30rem]">
            <h1 class="text-2xl mb-4">Following ({{ following }})</h1>
            <div class="overflow-scroll h-4/6 w-full">
              <div
                @click="(showFollowingModal = false), this.$router.go()"
                v-for="following in completeFollowingList"
                class="my-4 hover:cursor-pointer"
              >
                <router-link :to="'/profiles/' + following[0]">
                  <div class="hover:cursor-pointer flex items-center space-x-2">
                    <img
                      class="w-10 h-10 cover rounded-full"
                      :src="following[2]"
                    />
                    <h2 class="text-gray-800 font-bold cursor-pointer">
                      {{ following[1] }}
                    </h2>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div
            class="flex justify-between bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
          >
            <div></div>
            <span
              class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                @click="showFollowingModal = false"
              >
                Close
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <GlobalNavbar ref="navbarGlobal"></GlobalNavbar>
  <section>
    <div class="flex flex-row justify-center w-4/5 mx-auto p-10">
      <img
        class="rounded w-48 h-48 object-cover object-center"
        :src="profile_picture"
      />
      <div class="flex flex-col justify-center w-1/2 ml-20">
        <div class="flex flex-row">
          <p class="font-bold text-3xl mr-6">{{ username }}</p>
          <div>
            <div v-if="!followed">
              <button
                type="button"
                class="btn btn-sm btn-wide w-[7rem] bg-green-500"
                @click="followUser"
              >
                Follow
              </button>
            </div>
            <div v-else>
              <button
                type="button"
                class="btn btn-sm btn-wide w-[7rem] bg-red-500"
                @click="unfollowUser"
              >
                Unfollow
              </button>
            </div>
          </div>
        </div>

        <p class="text-gray-600 text-md mb-4">{{ location }}</p>
        <p class="text-md text-slate-500">{{ description }}</p>
        <div class="flex flex-row mt-6">
          <p class="text-lg text-slate-700 pr-4">
            <span class="font-bold">{{ postsCount }}</span> Posts
          </p>
          <p class="text-lg text-slate-700 pr-4">
            <span class="font-bold">{{ listingsCount }}</span> Listings
          </p>
          <p
            @click="showFollowerModal = true"
            class="text-lg text-slate-700 pr-4"
          >
            <span class="font-bold">{{ followers }}</span> Followers
          </p>
          <p @click="showFollowingModal = true" class="text-lg text-slate-700">
            <span class="font-bold">{{ following }}</span> Following
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="flex flex-row justify-center w-4/5 mx-auto divider"></div>
  <div class="flex flex-row justify-center w-4/5 mx-auto">
    <ul class="flex flex-row text-xl">
      <li
        @click="(showFeedPosts = true), (showMarketPosts = false)"
        class="px-16 hover:underline underline-offset-4 hover:-translate-y-1 transition-all ease-in-out cursor-pointer"
      >
        FITS OF THE DAY
      </li>
      <li
        @click="(showFeedPosts = false), (showMarketPosts = true)"
        class="px-16 hover:underline underline-offset-4 hover:-translate-y-1 transition-all ease-in-out cursor-pointer"
      >
        MARKETPLACE LISTINGS
      </li>
    </ul>
  </div>
  <div class="flex flex-row justify-center w-4/5 mx-auto divider"></div>
  <div class="w-4/5 mx-auto">
    <PostGrid v-if="showFeedPosts" :userId="$route.params.id"></PostGrid>
    <ListingGrid
      v-if="showMarketPosts"
      :userId="$route.params.id"
    ></ListingGrid>
  </div>

  <Footer />
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import Footer from "../components/footer/Footer.vue";
import PostGrid from "../components/viewprofile/PostGrid.vue";
import ListingGrid from "../components/viewprofile/ListingGrid.vue";
import axios from "axios";

export default {
  name: "ViewProfile",
  components: {
    GlobalNavbar,
    Footer,
    PostGrid,
    ListingGrid,
  },
  data() {
    return {
      currentUserId: null,
      userdata: this.$auth.user,
      profileData: null,
      username: null,
      profile_picture: null,
      location: null,
      description: null,
      followers: null,
      following: null,
      postsCount: null,
      listingsCount: null,
      showFeedPosts: true,
      showMarketPosts: false,
      followed: false,
      showFollowerModal: false,
      showFollowingModal: false,
      followerList: null,
      followingList: null,
      completeFollowerList: null,
      completeFollowingList: null,
    };
  },
  methods: {
    async userApi() {
      if (this.userdata == null) {
        return;
      } else {
        const getUserId = this.userdata.sub.replace("auth0|", "");

        try {
          const token = await this.$auth.getTokenSilently();
          const response = await fetch(
            `https://lowballd-backend.onrender.com/api/user/${getUserId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response.json();

          this.profileData = data;
        } catch (error) {
          console.log(error);
        }
      }
    },
    async getUserInfo() {
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/user/${this.$route.params.id}`
        );
        const data = await response.json();
        this.username = data.username;
        this.profile_picture = data.profile_picture;
        this.location = data.location;
        this.description = data.description;
        this.followers = data.followers.length;
        this.following = data.following.length;
        this.followerList = data.followers;
        this.followingList = data.following;
      } catch (error) {
        console.log(error);
      }
    },
    async getUserPosts() {
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/posts/profile/${this.$route.params.id}`
        );
        const data = await response.json();
        this.postsCount = data.length;
      } catch (error) {
        console.log(error);
      }
    },
    async getUserListings() {
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/market/profile/${this.$route.params.id}`
        );
        const data = await response.json();
        this.listingsCount = data.length;
      } catch (error) {
        console.log(error);
      }
    },
    async checkFollow() {
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/user/${this.currentUserId}`
        );
        const data = await response.json();
        if (data.following.includes(this.$route.params.id)) {
          this.followed = true;
        } else {
          this.followed = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async followUser() {
      const userData = {
        userId: `${this.currentUserId}`,
      };
      if (!this.$auth.isAuthenticated.value) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Please login to continue",
        });
        return;
      } else {
        try {
          const response = await axios.put(
            `https://lowballd-backend.onrender.com/api/user/${this.$route.params.id}/follow`,
            userData
          );
          const data = response.data;
          if (data === "you cant follow yourself") {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "You can't follow yourself!",
            });
          } else {
            this.$swal({
              icon: "success",
              title: "Success!",
              text: "You are now following this user!",
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    async unfollowUser() {
      const userData = {
        userId: `${this.currentUserId}`,
      };
      if (!this.$auth.isAuthenticated.value) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Please login to continue",
        });
        return;
      } else {
        try {
          const response = await axios.put(
            `https://lowballd-backend.onrender.com/api/user/${this.$route.params.id}/unfollow`,
            userData
          );
          const data = response.data;
          if (data === "you cant unfollow yourself") {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "You can't unfollow yourself!",
            });
          } else {
            this.$swal({
              icon: "success",
              title: "Success!",
              text: "this user has been unfollowed!",
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    async getCompleteFollowerList() {
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/user/${this.$route.params.id}`
        );
        const data = await response.json();
        const followerList = data.followers;
        const f = [];
        for (let i = 0; i < followerList.length; i++) {
          try {
            const response = await fetch(
              `https://lowballd-backend.onrender.com/api/user/${followerList[i]}`
            );
            const data = await response.json();
            const username = data.username;
            const profile_picture = data.profile_picture;
            f.push([followerList[i], username, profile_picture]);
          } catch (error) {
            console.log(error);
          }
        }
        console.log(f);
        this.completeFollowerList = f;
      } catch (error) {
        console.log(error);
      }
    },
    async getCompleteFollowingList() {
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/user/${this.$route.params.id}`
        );
        const data = await response.json();
        const followingList = data.following;
        const f = [];
        for (let i = 0; i < followingList.length; i++) {
          try {
            const response = await fetch(
              `https://lowballd-backend.onrender.com/api/user/${followingList[i]}`
            );
            const data = await response.json();
            const username = data.username;
            const profile_picture = data.profile_picture;
            f.push([followingList[i], username, profile_picture]);
          } catch (error) {
            console.log(error);
          }
        }
        console.log(f);
        this.completeFollowingList = f;
        console.log(this.completeFollowingList);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.userApi();
    this.currentUserId = this.$refs.navbarGlobal.userId;
    // this.currentUserFollowing = this.$refs.navbarGlobal.profileData;

    this.getUserInfo();
    this.getUserPosts();
    this.getUserListings();
  },
  beforeUpdate() {
    this.getCompleteFollowerList();
    this.getCompleteFollowingList();
    this.checkFollow();
  },
};
</script>
