<template>
	<div>
		<b-carousel id="slider"
		controls
		indicators
		>
		<div v-for="item in items">
		<b-carousel-slide
        :caption=item.caption
        :text=item.text
        :img-src=item.image
      >
      	<!-- :img-src="~assets/image/p2.jpg" -->
      </b-carousel-slide>
      </div>
  </b-carousel>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				items:[
				{caption:"Front Developer",image:require("@/assets/image/p1.jpg"),text:"Nulla vitae elit libero"},
				{caption:"Backend Developer",image:require("@/assets/image/p2.jpg"),text:"Nulla vitae elit libero, a pharetra augue mollis interdum."},
				{caption:"Full Stack Developer",image:require("@/assets/image/p3.jpg"),text:"pharetra augue mollis interdum."}
				]
			}
		}
	}
</script>