import Vuex from "vuex"
import axios from "axios"

const createStore=()=>{
	return new Vuex.Store({
		state:{
			loadData:[]
		},
		mutations:{
             setPostState(state,posts){
             	state.loadData=posts
             },
             addPostState(state,post){
             	state.loadData.push(post)
             },
             editPostState(state,editpost){
             	const postIndex=state.loadData.findIndex(
                        post=>post.id === editpost.id
             		)
                     state.loadData[postIndex]=editpost
             }
		},
		actions:{
           nuxtServerInit(vuexContext,context){
           	return axios.get("https://nuxtjsblog-f79a7-default-rtdb.firebaseio.com/posts.json")
        	.then(res=>{
        		// console.log(res.data);
        		const data=[];
        		for(const key in res.data){
        			data.push({...res.data[key],id:key})
        		}
        		vuexContext.commit("setPostState",data)
        	}).catch(e=>context.error(e));
           },
           //add new post dispatch
		addPost(vuexContext,post){
			const createPost={...post}
			return axios.
			    post("https://nuxtjsblog-f79a7-default-rtdb.firebaseio.com/posts.json",createPost)
			    .then(res=>{
                  	     // console.log(res.data);
                  	     vuexContext.commit("addPostState",{...createPost,id:res.data.name})
                  })
		},
		editPost(vuexContext,post){
			const createPost={...post}
			return axios.put("https://nuxtjsblog-f79a7-default-rtdb.firebaseio.com/posts/"+post.id+".json",post).then(res=>{
                  	     //commit mutation
                  	     vuexContext.commit("editPostState",post)
                  	      })
		}
	},
		
		getters:{
			//state
           getAllPosts(state){
           	   return state.loadData
           }
		}
	});
};
export default createStore