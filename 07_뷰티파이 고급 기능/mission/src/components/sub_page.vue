<template>
    <v-container>
        <v-content>
            <div class="text-center display-1 my-4">서브 페이지입니다.</div>
            <v-divider></v-divider>
            <div class="text-center display-3 my-4">{{ sParam1 }}</div>
            <div class="text-center display-3 my-4">{{ sParam2 }}</div>
            <div class="text-center">
                <v-btn fab large class="mt-5" color="teal" dark to="/main">
                    <v-icon>mdi-replay</v-icon>
                </v-btn>
            </div>
        </v-content>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            sParam1: this.$route.params.p_param1,
            sParam2: this.$route.params.p_param2,
        };
    },
};
</script>
