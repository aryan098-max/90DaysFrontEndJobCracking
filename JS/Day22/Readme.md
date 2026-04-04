1. CORS - Cross Origin Resource Sharing. It is a mechanism that allow one origin to access or share 
    resource to different origin.

    Explanation:

    Step1: Browsers detect whether our domain is trying make a request to a different domain (origin); 
    google.co.in 

    Steps2: If a request is not a simple request (for e.g., for requests like POST or PUT contains 
    special headers like Authorization), the browser automatically sends an OPTIONS request before the 
    actual request. This preflight request asks the server (google.co.in): "Are you okay with 
    aryan.co.in making this request?"

    Step3: The server (google.co.in) then responds with CORS headers or additional HTTP headers:

    1. Access-Control-Allow-Origin: * "I accept requests from any domain, subdomain, or protocol"
    2. Access-Control-Allow-Methods: GET, POST, PUT  
    3. Access-Control-Allow-Headers: Content-Type, Authorization  

    These headers tell whether the request is allowed or not.

    Step4: The Browser Decides, If the headers permit aryan.co.in to make the request, the browser
    proceeds with the actual request. If the headers do not allow it, the browser blocks the request 
    and shows a CORS error in the console.

    
2. Let's suppose that a weather website is making an api call to a api.weater.google.com. 

- Initially, a preflight request is made to the api.weather.google.com asking whether it is 
  allowed to make a reques to the server

- So, api.weather.google.com replies with additional HTTP Headers: stating whehther it will 
  allow to make that call or not 

    For example, "Access-Control-Allow-Origin: *" - it says that it allows call from any domain...

- Finally, after additional HTTP headers are sent an actual call is made to the api for requesting data