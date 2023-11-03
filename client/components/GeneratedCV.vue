<template>
    <div id="generated-cv" v-html="output" />
</template>

<script>
import Mustache from 'mustache';
import getTemplate from '../src/usecases/getTemplate';

export default {
    data(){
        return {
            templateRawHtml: "",
            userData: {
                title: "Luis Thiago Padilha",
            },
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
    border: 1px solid red;
    margin: 10px;
    height: 600px;
    width: 1000px;
}
</style>