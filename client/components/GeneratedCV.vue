<template>
    <div id="generated-cv" v-html="output" />
</template>

<script>
export default {
    props: {
        userData: Object,
        output: String,
    },
    data(){
        return {
        }
    },
}
</script>

<style scoped>
#generated-cv {
    background-color: white;
    color: black;
    margin: 10px;
    padding: 3px;
    width: 210mm;
    height: 297mm;
    margin: 0 auto;
}
</style>