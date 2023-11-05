<template>
  <div>
    <GeneratedCV :userData="userData" :output="output"/>
  </div>
</template>

<script>
import getFile from "../src/usecases/getFile";
import getTemplate from '../src/usecases/getTemplate';
import Mustache from 'mustache';
import userData from '../src/initialData';
export default {
  data(){
    return {
      templateRawHtml: "",
      output: "",
      userData: userData
    }
  },
  methods:{
    async fetchMessage(){
      try{
        const file = await getFile(this.userData);
        const url = window.URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'output.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }catch (e){
        console.log(e);
      }
    },
    async getTemplate(){
      this.templateRawHtml = await getTemplate();
    },
    fillTemplate(data){
      this.userData = data;
      this.output = Mustache.render(this.templateRawHtml, this.userData);
    }
  },
  async mounted(){
    try{
      await this.getTemplate();
      await this.fillTemplate(this.userData);
    }catch(e){
      console.log(e);
    }
  }
}
</script>

<style scoped>

</style>