<template>
	<div>
	<coreLayout/>
	<AdminForm @sendData="onSubmitted"/>
</div>
</template>
<script>
	import axios from 'axios'
	export default{
        methods:{
             onSubmitted(postData){
             	this.$store.dispatch("addPost",postData)
             	.then(()=>{
             		this.$router.push("/admin/posts")
             	})
                  // console.log("Result",postData);
                  // axios.post("https://nuxtjsblog-f79a7-default-rtdb.firebaseio.com/posts.json",postData).then(res=>{
                  // 	     console.log(res);
                  // })
             }
        }
	}
</script>