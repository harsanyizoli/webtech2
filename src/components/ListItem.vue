<template>
    <li>
        <div class="row">

            <p class="col-3">{{data.artist}}</p>
            <p class="col-3">{{data.title}}</p>
            <p class="col-3">{{data.year}}</p>
            <div class="options" v-bind:class="{hide: owner}">
                <button class="btn" v-on:click="updateItem"><i class="fas fa-edit"></i></button>
                <button class="btn" v-on:click="deleteItem"><i class="far fa-times-circle"></i></button>    
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'ListItem',
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
.row {
    margin: 0;
}
.options {
    opacity: 0.6;
    width: 32px;
    padding-right: 1px;
    position: absolute;
    right: 10px;
    bottom: 0px;
    text-align:right;
    cursor: pointer;
}
.options button:last-child {
    margin-right: 2px;
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
p {
    display: inline;
    margin-left: 30px;
    text-align: left;
}

</style>