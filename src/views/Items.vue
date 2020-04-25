<template>
    <div class="container">
        <div class=" row">
            <div v-for='item in items' :key='item.id' class="col-lg-4 col-md-6 col-sm-12">
                <Item v-bind:data='item' />
            </div>    
        </div>
    </div>
</template>
<script>
import Item from '../components/Item.vue'

export default {
    name: 'Items',
    components: { Item },
    data(){
        return {
            items:
            [
                {
                    id: 1, title: 'Master of Reality', artist: 'Black Sabbath', 
                    url: 'http://localhost:8090/resources/masterofreality.jpg', year: '1971'
                },
                {
                    id: 2, title: 'Technical Ecstasy', artist: 'Black Sabbath',
                    url: 'http://localhost:8090/resources/technicalecstasy.jpg', year: '1976'
                }

            ]
        }
    }
}
</script>
<style>
.items {
    background-color: gray;
}
</style>