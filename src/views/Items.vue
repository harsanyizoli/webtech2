<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="list-group list-group-horizontal asd">
                  <li class="list-group-item" v-bind:class='{activer: list}' @click="showList"><i class="fas fa-bars"></i></li>
                  <li class="list-group-item" v-bind:class='{activer: !list}' @click="showImage"><i class="fas fa-th"></i></li>
                  <li class="list-group-item"><router-link class="rl" to="/items/addItem">Add new item</router-link>  </li>
                </ul>
            </div>
            <div v-show='!list' v-for='item in items' :key='item._id' class="items col-lg-3 col-md-6 col-sm-12">
                <Item v-bind:data='item' v-bind:owner='item.owner == username'
                 v-on:deleteItem="deleteItem" v-on:updateItem="updateItem"/>
            </div>
            <ul v-show='list' v-for='item in items' :key='item._id' class="list-group asd1">
                <ListItem v-bind:data='item' v-bind:owner='item.owner == username'
                 v-on:deleteItem="deleteItem" v-on:updateItem="updateItem" class="list-group-item asd1"/>
            </ul>
        </div>
    </div>
</template>
<script>
import Item from '../components/Item.vue'
import ListItem from '../components/ListItem.vue'
import axios from 'axios'

export default {
    name: 'Items',
    components: { Item, ListItem },
    props: ['username'],
    data(){
        return {
            items:
            [ //hogy ne legyen olyan ures
                {
                    _id: 1, title: 'Master of Reality', artist: 'Black Sabbath', 
                    imageUrl: 'http://localhost:8090/resources/masterofreality.jpg', year: '1971', owner: 'not you'
                },
                {
                    _id: 2, title: 'Technical Ecstasy', artist: 'Black Sabbath',
                    imageUrl: 'http://localhost:8090/resources/technicalecstasy.jpg', year: '1976', owner: 'not you'
                },
                {
                    _id: 3, title: 'Paranoid', artist: 'Black Sabbath',
                    imageUrl: 'http://localhost:8090/resources/paranoid.jpg', year: '1970', owner: 'not you'
                },
                {
                    _id: 4, title: 'Black Sabbath', artist: 'Black Sabbath',
                    imageUrl: 'http://localhost:8090/resources/blacksabbath.jpg', year: '1970', owner: 'not you'
                },
                {
                    _id: 5, title: 'Vol. 4', artist: 'Black Sabbath',
                    imageUrl: 'http://localhost:8090/resources/volume4.jpg', year: '1972', owner: 'not you'
                },
                {
                    _id: 6, title: 'Never Say Die!', artist: 'Black Sabbath',
                    imageUrl: 'http://localhost:8090/resources/neversaydie.jpg', year: '1978', owner: 'not you'
                }

            ],
            list: false
        }
    },
    created(){
        axios.get('/api/getItems').then(res => {
            for(const i of res.data){
                this.items.push(i);
            }
        });
    },
    methods: {
        deleteItem(id){
            console.log('deleting id: ', id);
            axios.delete('/api/deleteItem/' + id).then(res => {
                console.log(res);
            });
            this.items = this.items.filter(x => x._id != id);
        },
        updateItem(id){
            console.log('updating id: ', id);
            window.location += '/' + id;
        },
        showList(){
            this.list = true;
        },
        showImage(){
            this.list = !true;
        }
    }
}
</script>
<style>
.activer {
    background-color: rgb(51, 51, 51);
    color: white;
}
.list-group.asd {
    margin-top: -30px;
    margin-bottom: 30px;
}
.list-group.asd .list-group-item {
    border: 1px solid gray;
    cursor: pointer;
}
.items {
    margin-bottom: 40px;
}
.asd li a.rl {
    color: black;
}
.asd li a.rl:hover {
    text-decoration: none;
    color: rgb(51, 51, 51);
}
.asd1 {
    width: 100%;
}
</style>