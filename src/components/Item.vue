<template>
    <div class="listing">
        <h3>{{data.artist}}</h3>
        <h3>{{data.title}}</h3>
        <p>{{data.year}}</p>
        <img :src="data.url"/>
    </div>
</template>

<script>

export default {
    name: 'Item',
    props: ['data']    
}
</script>

<style>
.listing {
    margin: auto;
    max-width: 340px;
    box-sizing: border-box;
    padding: 20px 0;
    border-radius: 0px;
    border-top: 2px solid rgba(0, 0, 0, 1);
}
h3 {
    margin-left: 20px;
    width: 100%;
}
p {
    font-size: 20px;
    float: right;
    text-align: right;
}
img {
    border: 1px solid lightgray;
    width: 100%;
    margin: auto;
}
</style>