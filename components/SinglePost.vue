<template>
	<b-container fluid="md" class="py-2">
	   <b-row>
	   	<b-col lg="12" class="py-5">
	   		<h1 class="mt-4">{{singlePost.title}}</h1>
	   		<p>by <b>{{singlePost.author}}</b></p>
	   		<hr>
	   		<b-img :src="singlePost.image"></b-img>
	   		<hr>
	   		<p>
	   			{{singlePost.content}}
	   		</p>
	   	</b-col>
	   </b-row>
    </b-container>
</template>
<script>
	export default{
		data () {
		  return {
		    singlePost:{...this.post}
		  }
		},
		props:{
			post:{
				type:Object,
				required:false
			}
		},
		methods: {
		  onSubmit(evt) {
		  	 this.$emit('sendData',this.form)
             // console.log(this.form);	
             this.$router.push('/admin/posts')	    
		  },
		   onReset(evt) {
		  	 evt.preventDefault();
		  	 this.$emit('sendData',this.form)
             this.form.title='';	    
             this.form.content='';	    
             this.form.image='';	    
             this.form.author='';	    
		  }
		}
	}
</script>