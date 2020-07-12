<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  	<form action="shorten" method="post" name="shorten">  
 	 <p>
		<input type="text" id="url" />
	 </p>	<button id="submit">Submit</button>
	</form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
