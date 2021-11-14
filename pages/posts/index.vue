<template>
	<div>
    <coreLayout />
  <b-container fluid>
    <!-- <h2>hello post</h2> -->
    <Header/>
    <!-- <b-container> -->
    <PostList :posts="loadData"/>
  <!-- </b-container> -->
  </b-container>
</div>
</template>
<script>
	export default{

    computed:{
          loadData(){
            return this.$store.getters.getAllPosts
          }
       }

		// data () {
  //     return {
  //       loadData:[
  //           {
  //              id:"1",
  //              title:"Card Title 1", 
  //              content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  //              image:"https://images.pexels.com/photos/7844475/pexels-photo-7844475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  //           },
  //           {
  //             id:"2",
  //             title:"Card Title 2", 
  //             content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  //             image:"https://images.pexels.com/photos/7844475/pexels-photo-7844475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  //           },
  //           {
  //             id:"3",
  //             title:"Card Title 3", 
  //             content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  //             image:"https://images.pexels.com/photos/7844475/pexels-photo-7844475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  //           },
  //           {
  //             id:"4",
  //             title:"Card Title 4", 
  //             content:"printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  //             image:"https://images.pexels.com/photos/7844475/pexels-photo-7844475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  //           }
  //       ]
  //     }
  //   }
	}
</script>
