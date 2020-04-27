<template>
    <div class="listing">
        <div class="img-cont">
            <img :src="data.imageUrl" />
        </div>
        <p>{{data.year}}</p>
        <h3>{{data.artist}}</h3>
        <h3>{{data.title}}</h3>
        <div class="options" v-bind:class="{hide: !owner}">
            <button class="btn" v-on:click="updateItem"><i class="fas fa-edit"></i></button>
            <button class="btn" v-on:click="deleteItem"><i class="far fa-times-circle"></i></button>    
        </div>
    </div>
</template>

<script>

export default {
    name: 'Item',
    props: ['data', 'owner'],
    data(){
        return {
            id: this.$props.data._id
        };
    },
    methods: {
        deleteItem(){
            console.log(this.id);
            this.$emit('deleteItem', this.id);
        },
        updateItem(){
            console.log(this.id);
            this.$emit('updateItem', this.id);
        }
    }
}
</script>

<style scoped>
.listing {
    height: 375px;
    margin: auto;
    box-sizing: border-box;
    border-radius: 0px;
    border-bottom: 1px solid rgb(51, 51, 51);
}
h3 {
    line-height: 30px;
}
h3:first-of-type {
    position: absolute;
    bottom: 60px;
}
h3:last-of-type {
    width: 100%;
    position: absolute;
    bottom: 20px;
    font-size: 20px;
}
.img-cont {
    width: 100%;
    padding: auto;
}
p {
    font-size: 20px;
    text-align: right;
    margin: 0;
    margin-bottom: -2px;
}

.options {
    opacity: 0.6;
    width: 64px;
    padding-right: 1px;
    position: absolute;
    right: 20px;
    bottom: 0px;
    text-align:right;
    cursor: pointer;
}
.options button:last-child {
    margin-right: 2px;
}
img {
    border: 1px solid lightgray;
    width: 100%;
    margin: auto;
}
.options .btn {
    padding: 0px;
}
.options .btn:active {
    border: none;
}
.hide {
    visibility: hidden;
}
</style>