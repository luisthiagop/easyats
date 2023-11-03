<template>
    <div id="generated-cv" v-html="output" />
</template>

<script>
import Mustache from 'mustache';
import getTemplate from '../src/usecases/getTemplate';

export default {
    props: {
        userData: Object,
    },
    data(){
        return {
            templateRawHtml: "",
            output: "",
        }
    },
    async mounted(){
        try{
            await this.getTemplate();
            await this.fillTemplate();
        }catch(e){
            console.log(e);
        }
    },
    methods: {
        async getTemplate(){
            this.templateRawHtml = await getTemplate();
        },
        fillTemplate(){
            this.output = Mustache.render(this.templateRawHtml, this.userData);
        }
    }
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