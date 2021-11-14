<template>
	<div>
	<coreLayout/>
	<SinglePost :post="singlePost"/>
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

         }
	}
</script>