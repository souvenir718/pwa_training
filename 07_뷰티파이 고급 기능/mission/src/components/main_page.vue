<template>
    <v-container>
        <v-content>
            <div class="text-center display-3 my-4">메인 페이지입니다.</div>
            <v-row>
                <v-col offset-sm="1" sm="10">
                    <p>매개변수1</p>
                    <p>{{ sParam1 }}</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col offset-sm="1" sm="10">
                    <v-text-field label="매개변수2" v-model="sParam2"></v-text-field>
                </v-col>
            </v-row>
            <div class="text-center">
                <v-btn class="mt-5" large color="purple" dark @click="fnGoSub">확인</v-btn>
            </div>
        </v-content>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            sParam1: "안녕하세요",
            sParam2: "",
        };
    },
    methods: {
        fnGoSub() {
            this.$router.push({
                name: "sub_page",
                params: {
                    p_param1: this.sParam1,
                    p_param2: this.sParam2,
                },
            });
        },
    },
};
</script>
