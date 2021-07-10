<template>
    <div>
        <h2>서브 페이지</h2>
        <button v-on:click="fnMainPage">메인 페이지로 이동</button>
    </div>
</template>

<script>
export default {
    methods: {
        fnMainPage() {
            this.$router.push("/main");
        },
    },
};
</script>

<style lang="scss" scoped></style>
