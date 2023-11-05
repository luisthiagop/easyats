<template>
  <div>
    <UButton label="Open" @click="isOpen = true" />
    <USlideover side="left" preventClose="true" v-model="isOpen">
      <div class="p-8">
        <UFormGroup label="Name" name="name">
            <UInput v-model="userData.name" />
        </UFormGroup>
        <UFormGroup label="Title" name="title">
            <UInput v-model="userData.title" />
        </UFormGroup>
        <UFormGroup label="Phone" name="phone">
            <UInput v-model="userData.phone" />
        </UFormGroup>
        <UFormGroup label="E-mail" name="mail">
            <UInput v-model="userData.mail" />
        </UFormGroup>
        <UFormGroup label="Location" name="location">
            <UInput v-model="userData.location" />
        </UFormGroup>
        <UButton label="Preview" @click="preview" />
      </div>
    </USlideover>
  </div>
</template>

<script>
export default {
    props:{
        userData: Object
    },
    data(){
        return {
            isOpen: false
        }
    },
    methods:{
        preview($event){
            this.isOpen = false;
            console.log(this.userData);
            this.$emit("refreshCV", this.userData);
            console.log('editou!');
        }
    }
}
</script>