<template>

                <div class="w-full h-20 flex flex-col justify-center">
                    <div class="flex flex-row">
                        <div ref="commentPicture" class="h-12 w-12 bg-cover bg-center rounded-full">
                        </div>
                        <div class="mx-4 flex flex-col justify-center">
                            <p class="font-bold">{{username}}</p>
                            <p class="text-sm text-slate-500">{{comment}}</p>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
    name: 'UserComment',
    
    data() {
        return {
            username: null,
            profile_picture: null,
        };
    },
    props: {
            userId: null,
            date: null,
            comment: null,
    },
    methods: {
        backgroundStyles(image) {
            return {
                'background-image': `url(${profile_picture})`,
            }
        },
        async getUserInfo() {
            try {
                const response = await fetch(
                `https://lowballd-backend.onrender.com/api/user/${this.userId}`
                );
                const data = await response.json();
                this.username = data.username;
                this.profilePicture = data.profile_picture;
                const commentPic = this.$refs.commentPicture;
                commentPic.style.backgroundImage = `url(${this.profilePicture})`;
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getUserInfo();
    },
    }
</script>