<template>
    <div class="container">
        <p class="goback" @click="goBack"><i class="fas fa-arrow-circle-left"></i>Go back</p>
        <p class="gobackdisp display-1">Page not found</p>
    </div>
</template>
<script>
export default {
    name: 'NotFound',
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
}
</script>
<style scoped>
.goback {
    text-align: left;
    width: 120px;
    margin-top: 40px;
    float: left;
    cursor: pointer;
}
.gobackdisp {
    width: calc(100% - 200px);
    float: right;
}

</style>