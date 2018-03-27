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
      SPRING_URL_GET_SUSPECT = "http://localhost:8080//csi/suspect"; 
      
      /* CASES */
      SPRING_URL_GET_CASES = "http://localhost:8080/csi/enquetes"; 
      SPRING_URL_GET_CASE = "http://localhost:8080/csi/enquete"; 

  /* AUTHENTIFICATION SERVER */
  AUTH_URL = "http://localhost:4242"; //Base Url
  AUTH_URL_ROLE = "http://localhost:4242/api/role"
  AUTH_URL_USER = "http://localhost:4242/api/user"


  /* TESTING PURPOSE */
  ERROR_URL = "http://badUrl";
  FAKE_USER_PREF = "/assets/data/favoriteCases.json"

}

//localhost/csi/suspect/link -> lie un suspect à une enquete (post)