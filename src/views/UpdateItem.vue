<template>
    <div>
        <div class="container">
            <p class="display-2">Update item </p>
            <form @submit="submit">
                <div class="form-group">
                       <label for="exampleFormControlInput1">Artist</label>
                       <input type="text" class="form-control input-bd" v-model="record.artist">
                     </div>
                     <div class="form-group">
                       <label for="exampleFormControlInput1">Title</label>
                       <input type="text" class="form-control input-bd" v-model="record.title">
                     </div>
                     <div class="form-group">
                       <label for="exampleFormControlInput1">Year</label>
                       <input type="number" class="form-control input-bd" value="1970" v-model="record.year">
                     </div>
                     <div class="form-group">
                        <label for="exampleFormControlInput1">Description</label>
                        <input type="textarea" class="form-control input-bd" value="1970" v-model="record.description">
                        <small id="emailHelp" class="form-text text-muted">(optional)</small>
                     </div>
                     <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'UpdateItem',
    data(){
        return {
            id: this.$route.params.id,
            record: {
                artist: '',
                title: '',
                year: '',
                description: ''
            }

        }
    },
    created(){
        axios.get('/api/getItem/',{
            params: { id: this.$route.params.id }
        }).then(res => {
            console.log(res);
            this.record.artist = res.data.artist;
            this.record.title = res.data.title;
            this.record.year = res.data.year;
            this.record.description = res.data.description;
        })
    },
    methods:{
        submit(){
            axios.post('/api/updateItem/', {
                id: this.id,
                artist: this.record.artist,
                title: this.record.title,
                year: this.record.year,
                description: this.record.description
            }).then(res => {
                console.log(res);
                window.location = '/#/items';
            });
        }
    }
}
</script>