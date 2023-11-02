<template>
  <div>
    <p>Aqui você pode preencher seu curriculo</p>
    <UButton @click="fetchMessage">Gerar CV</UButton>
  </div>
</template>

<script>
import getFile from "../src/usecases/getFile";
export default {
  methods:{
    async fetchMessage(){
      try{
        const file = await getFile();
        const url = window.URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'output.pdf'; // Nome do arquivo
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }catch (e){
        console.log(e);
      }
    }
  }
}
</script>