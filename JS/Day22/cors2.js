/**
    # Note:

    1. Not all cross origin makes a preflight request (simple request are processed normally)

    2. Preflight request are generally triggered by (POST, PUT) methods, these methods makes
       a pre-flight request and server sends additional HTTP headers like: 

        1. Access-Control-Allow-Methods: PUT, POST

    3. cors prevents malicious websites from make unauthorized api calls.
  
 */