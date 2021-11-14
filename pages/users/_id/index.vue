<template>
	<h2>Welcome : {{$route.params.id}}</h2>
</template>
<script>
	export default{
		validate(data){
			return /^\d+$/.test(data.params.id)
		}
	}
</script>