<template>
	<div>
	<coreLayout/>
	<AdminForm @sendData="onSubmitted" :post="singlePost"/>
</div>
</template>
<script>
	import axios from 'axios'
	export default{
          asyncData(context){
               return axios.get("https://nuxtjsblog-f79a7-default-rtdb.firebaseio.com/posts/"+context.params.id+".json")
          .then(res=>{
               return {
                    singlePost:{
                         ...res.data,id:context.params.id 
                    }
               }
          }).catch(e=>context.error(e));

         },
        methods:{
             onSubmitted(postData){

             	this.$store.dispatch("editPost",postData)
             	.then(()=>{
             		this.$router.push("/admin/")
             	})
                  // console.log("Result",postData);
                  // axios.post("https://nuxtjsblog-f79a7-default-rtdb.firebaseio.com/posts.json",postData).then(res=>{
                  // 	     console.log(res);
                  // })
             }
        }
	}
</script>