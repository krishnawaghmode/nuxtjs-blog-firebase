<template>
	<b-container fluid="md" class="py-2">
	<h2 align="center">new post create</h2>
	<b-form @submit.prevent="onSubmit" @reset="onReset">
		<b-form-group label="Title">
			<b-form-input type="text" placeholder="Enter title here" v-model="form.title"></b-form-input>
		</b-form-group>
		<b-form-group label="Caption">
			<b-form-textarea 
			placeholder="Enter caption here"
			rows=8
			v-model="form.content"
			></b-form-textarea>
		</b-form-group>
		<b-form-group label="Image">
			<b-form-input type="text" placeholder="Enter image url here" v-model="form.image"></b-form-input>
		</b-form-group>
		<b-form-group label="Author">
			<b-form-input type="text" placeholder="Enter author here" v-model="form.author"></b-form-input>
		</b-form-group>
		<b-button type="submit" variant="primary">Save</b-button>
		<b-button type="reset" variant="danger">Reset</b-button>
	</b-form>
	<!-- <b-card header="result" class="mt-3">
		{{form}}
	</b-card> -->
</b-container>
</template>
<script>
	export default{
		data () {
		  return {
		    form:this.post?{...this.post} :
		    {
                title:"",
                content:"",
                image:"",
                author:""
		    }
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