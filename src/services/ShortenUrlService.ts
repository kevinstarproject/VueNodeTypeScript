import http from "./http-common"

class ShortenUrlService{
   getAll(){
	return http.get("/list");
	}
    
   create(url: string){
   	return http.post("/insert", {url:url} )
   }
	
}

export default new ShortenUrlService();


