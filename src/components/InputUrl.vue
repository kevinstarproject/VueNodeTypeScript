<template>
<div>
<div class="submit-form">

  <h1>Shorten Url</h1>


    <input type="text" class="form-control" id="url" required v-model="shortenUrl.originalUrl" laceholder="Enter Url" name="url">

    <button @click="shortenOriginalUrl" class="btn btn-success">Shorten it!</button>
    <div> Shorten Url: {{shortenUrl.shortenUrl}} </div>

</div>

	<ListUrl />
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ShortenUrlService from "../services/ShortenUrlService";
import ListUrl from "./ListUrl.vue";
import {eventBus} from "../main";

@Component({
	components:{
		ListUrl
	}
})

export default class InputUrl extends Vue {
  private shortenUrl : any = {
	originalUrl:"",
	shortenUrl:"",
	createdAt:""
  }
  @Prop() private msg!: string;
  shortenOriginalUrl(){
      ShortenUrlService.create(this.shortenUrl.originalUrl).
      then((response)=>{
         this.shortenUrl.shortenUrl = response.data.shortenUrl;
		eventBus.$emit('refreshList');
	}).catch((e)=>{

         console.log(e);
     })
  }

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
