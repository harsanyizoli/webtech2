<template>
    <div class="landing">
        <div class="landing-content">
            <p>Record Archive</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>
<style scoped>
.landing {
    background: url('https://cdn.discordapp.com/attachments/500381920736051201/700439761818484777/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 56px);
}
.landing-content {
    position: absolute;
    margin: 0px 0px 30px 30px;
    bottom: 60px;
}
p {
    color: white;
    font-weight: bold;
    font-size: 96px;
    margin: 0;
    text-shadow: 1px 1px 2px black; 
}
</style>