<template>
  <div class="list row list-url">
	<hr />
	 <div class="col">
      <h4>Shorten Url List</h4>
      <ul class="list-group">

	<li class="li-title">
	     <div class="row">
                <div class="col-6">
                	Original Url 
		</div>
                <div class="col-6">
                        Shorten Url
                </div>
          </div>

	</li>
        <li
          class="list-group-item"
          v-for="(item, index) in shortenUrls"
          :key="index"
        >
          <div class="row">
		<div class="col-6">
			{{ item.originalUrl }}
		</div>
		<div class="col-6">
			{{ item.shortenUrl  }}
		</div>
	  </div>
        </li>
      </ul>
	</div>
    </div>
</template>



<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ShortenUrlService from "../services/ShortenUrlService";
import {eventBus} from "../main";
@Component
export default class ListUrl extends Vue {
	private shortenUrls: any[] = [];

	getPastUrl(){
		ShortenUrlService.getAll()
		.then((response) => {
			this.shortenUrls = response.data.filter((item:any)=>item.originalUrl != null);
			console.log(response.data);
		})
		.catch((e)=>{
			console.log(e);
		});
		
	}


	created() {
 		     eventBus.$on('refreshList', () => {
        	    this.getPastUrl();
    	})
}
	mounted(){
		this.getPastUrl();
	}
}
</script>

<style scoped>
.li-title{
	font-weight:bold;
}
</style>
