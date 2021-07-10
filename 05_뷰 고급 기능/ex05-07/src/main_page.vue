<template lang="html">
    <div>
        <h2>메인페이지</h2>
        <button @click="fnSubPage">서브 페이지로 이동</button>
    </div>
</template>

<script>
export default {
    methods: {
        fnSubPage() {
            this.$router.push("/sub");
        },
    },
};
</script>

<style></style>
