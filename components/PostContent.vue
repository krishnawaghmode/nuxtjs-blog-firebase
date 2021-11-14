<template>
	<b-col md="3">
  <b-card
    :title=title
    :img-src=image
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
     {{content.slice(0,170)+"..."}}
    </b-card-text>
<nuxt-link class="btn btn-success" :to="postLink">
{{ isAdmin ? 'admin' : 'not admin'}}
</nuxt-link>
    <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
  </b-card>
</b-col>
</template>
<script>
  export default{
    props:{
      id:{
          type:String,
          required:false
      },
      title:{
          type:String,
          required:true
      },
      content:{
          type:String,
          required:true
      },
      image:{
          type:String,
          required:true
      },
      isAdmin:{
          type:Boolean,
          required:true
      }
    },
    computed:{
       postLink(){
           return this.isAdmin ? '/admin/posts/'+this.id : '/posts/'+this.id
       }
    }
  }
</script>