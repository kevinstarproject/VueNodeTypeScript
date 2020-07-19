import axios from "axios";
import { baseUrl } from "../vars";
export default axios.create({
	baseURL:baseUrl,
	headers:{
		"Content-type":"application/json",
		"Access-Control-Allow-Origin": "*"	
	}

})






