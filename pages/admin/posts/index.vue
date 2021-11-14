<template>
	<!-- <h2>Hello Admin page</h2> -->
	<div>
	<coreLayout/>
	<PostList isAdmin :posts="loadData"/>
	<!-- <b-button @click="postsAll">Load...</b-button> -->
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
         computed:{
         	loadData(){
         		return this.$store.getters.getAllPosts
         	}
         }


// 		data () {
// 		  return {
// 		    loadData:[]
// 		  }
// 		},
        
//         asyncData(context){
//             return new Promise((resolve,reject)=>{
//             	setTimeout(()=>{
//             		const data = axios.get("https://nuxtjsblog-f79a7-default-rtdb.firebaseio.com/posts.json")
//             		.then(res=>{
//             			const postData=[];
//             			for(const key in res.data){
//                              postData.push({...res.data[key],id:key})
//             			}
//             			return {
//             				loadData:postData
//             			}
//             		})
//             		resolve(data)
//             	},4000)
//             })

// }



        	// return axios.get("https://nuxtjsblog-f79a7-default-rtdb.firebaseio.com/posts.json")
        	// .then(res=>{
        	// 	// console.log(res.data);
        	// 	const data=[];
        	// 	for(const key in res.data){
        	// 		data.push({...res.data[key],id:key})
        	// 	}
        	// 	return {
        	// 		loadData:data
        	// 	}
        	// });
        // }   

		// methods:{

			//method 1
	// 		async postsAll(){
	// 			 console.log("click");
 // await axios.get("https://nuxtjsblog-f79a7-default-rtdb.firebaseio.com/posts.json").then(res=>{
 //                  	     console.log(res);
 //                  })
	// 			 console.log("load complete");

	// 		}


//method 2
 //  async postsAll(){
	//         console.log("click");
 //          await this.getData().then((result)=>{
 //            console.log(result);
 //    })
 //    console.log("load complete");
 //  },
	// getData(){
	// 	return new Promise((resolve,reject)=>{
	// 		setTimeout(()=>{
	// 			const data=axios.get("https://nuxtjsblog-f79a7-default-rtdb.firebaseio.com/posts.json")
	// 			.then(res=>{
	// 				return res
	// 			})
	// 			resolve(data)
	// 		},4000)
	// 	 })
	// 	}
	// }


	}
</script>