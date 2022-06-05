<template>

                <div class="w-full h-20 flex flex-col justify-center">
                    <div class="flex flex-row">
                        <div :style="backgroundStyles(image)" class="h-12 w-12 bg-cover rounded-full">
                        </div>
                        <div class="mx-4 flex flex-col justify-center">
                            <p class="font-bold">{{commenter.username}}</p>
                            <p class="text-sm text-slate-500">{{commenter.comment}}</p>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
    name: 'UserComment',
    props: {
        commenter: {
            username: 'Mike Whalen',
            profile_picture: 'https://3.files.edl.io/aeb1/20/12/02/154937-46cc468f-b7f4-4bb3-945e-3265bdb605d4.jpg',
            comment: "This sucks",
        }
    },
    methods: {
        backgroundStyles(image) {
            return {
                'background-image': `url(${commenter.profile_picture})`,
            }
        },
    }
}
</script>