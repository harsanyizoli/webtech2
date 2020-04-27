<template>
    <div>
        <div class="container">
            <p class="display-4">Add new Item</p>
            <form @submit="uploadItem" id='formid' method='POST' enctype="multipart/form-data" action='/api/addItem'>
                <div class="form-group">
                   <label for="exampleFormControlInput1">Artist</label>
                   <input type="text" class="form-control input-bd" name='artist' v-model="record.artist" required>
                 </div>
                 <div class="form-group">
                   <label for="exampleFormControlInput1">Title</label>
                   <input type="text" class="form-control input-bd" name='title' v-model="record.title" required>
                 </div>
                 <div class="form-group">
                   <label for="exampleFormControlInput1">Year</label>
                   <input type="number" class="form-control input-bd" name='year' value="1970" v-model="record.year">
                 </div>
                 <div class="form-group">
                    <label for="exampleFormControlInput1">Description</label>
                    <input type="textarea" class="form-control input-bd" name='description' value="1970" v-model="record.description">
                    <small class="form-text text-muted">(optional)</small>
                 </div>
                 <div class="form-group">
                  <label for="exampleFormControlFile1">Cover</label><br />
                  <FileUpload class="" />
                </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
import FileUpload from '../components/FileUpload'
//import axios from 'axios'

export default {
    name: 'AddItem',
    components: { FileUpload },
    data(){
        return {
            record: {
                artist: '',
                title: '',
                year: '1970',
                description: '',
                image: ''
            },
            fileId: 'imageUpload',
            name: 'imageName'
        }
    },
    methods: {
        uploadItem(){
        },
        addImage(el){
            console.log(el);
                       
            if(el.files.length != 0){
                this.record.image = el.files[0];
            } else {
                console.err('no image');
            }
        }
    }
}
</script>
<style scoped>
form {
    max-width: 60%;
}
.input-bd {
    border: 1px solid gray;
}
input[type=number]{
    width: 140px;
}
.btn {
    background-color: rgb(51, 51, 51);
}
</style>