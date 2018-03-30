/* 
  This file contains all possible url call done by the application.
  Please use the notations belows when proceding to a HttpRequest,
  in order to avoid type errors by hard coded url, 
  and also to provide better readability.

*/

export class URL_LIST {

  /* CSI-BACK URL  */
  SPRING_URL =  "http://localhost:8080/csi"; //Base Url

      /* SUSPECTS */
      SPRING_URL_GET_SUSPECTS = "http://localhost:8080/csi/suspects"; 
      SPRING_URL_GET_SUSPECT = "http://localhost:8080/csi/suspect"; 
      SPRING_URL_POST_SUSPECT = "http://localhost:8080/csi/suspect"; 
      SPRING_URL_PUT_SUSPECT = "http://localhost:8080/csi/suspect"; 
      // SPRING_URL_DELETE_SUSPECT = "http://localhost:8080/csi/suspect"; 
      
      /* LINK */
      SPRING_URL_POST_SUSPECT_LINK = "http://localhost:8080/csi/suspect/link"; 
      SPRING_URL_POST_USER_LINK = "http://localhost:8080/csi/agent/link"; 
      
      /* CASES */
      SPRING_URL_GET_CASES = "http://localhost:8080/csi/enquetes"; 
      SPRING_URL_GET_CASE = "http://localhost:8080/csi/enquete"; 
      SPRING_URL_POST_CASE = "http://localhost:8080/csi/enquete"; 
      SPRING_URL_PUT_CASE = "http://localhost:8080/csi/enquete"; 
      SPRING_URL_DELETE_CASE = "http://localhost:8080/csi/supprimer"; 
      
      /* USERS */
      SPRING_URL_GET_USERS = "http://localhost:8080/csi/agents"; 
      SPRING_URL_GET_USER = "http://localhost:8080/csi/agent"; 
      SPRING_URL_POST_USER = "http://localhost:8080/csi/agent"; 
      SPRING_URL_PUT_USER = "http://localhost:8080/csi/agent"; 
      // SPRING_URL_DELETE_USER = "http://localhost:8080/csi/agent"; 
      
  /* AUTHENTIFICATION SERVER */
  AUTH_URL = "http://localhost:4242"; //Base Url
  AUTH_URL_ROLE = "http://localhost:4242/api/role"
  AUTH_URL_USER = "http://localhost:4242/api/user"


  /* TESTING PURPOSE */
  ERROR_URL = "http://badUrl";
  FAKE_USER_PREF = "/assets/data/favoriteCases.json"

}

//localhost/csi/suspect/link -> lie un suspect à une enquete (post)