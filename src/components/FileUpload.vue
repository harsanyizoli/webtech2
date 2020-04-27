<template>
    <input 
        type="file"
        :name="$parent.name"
        :id="$parent.fileId"
        @change='change'
        accept="image/*"
    >
</template>
<script>
export default {
    name: 'FileUpload',
    methods: {
        change(e){
            this.$parent.addImage(e.target);
        }
    }
}
</script>