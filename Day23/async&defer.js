/**
 
1.async and defer are boolean attributes, which are used along with script tags, to load the exeternal script 
  efficently to our webpage.

  - When our webiste is loading in the browser two major things are happening
        1. First, HTML is parsed and DOM tree is built
        2. js file is downloaded and executed

 
# Note: Since, we are putting <script> tag at the end of the html after body it means that after the entire HTML
        is parsed (DOM tree is built ) script tag is loaded and executed in the browser.

    # Note: if we put <script> tag at the head, then HTML parsing is paused until the script is loaded
            and execited. This creates a problem

    - Without defer or async, a <script> in the <head> blocks HTML parsing to both download and execute it 
      immediately, which can cause errors if the script tries to access DOM elements that haven't been 
      created yet.

    - Pro-tip: Always use defer in the <head> to download the script in the background and only execute it after 
      the HTML is fully parsed.

# Therefore, if we are placing <script> tag at the head we must use: defer


    
1️. The Default Behaviour (Without async or defer)
    <script src="script.js"></script>

    - The browser stops (parsing HTML) the page when it encounters this <script> tag.
    - It downloads and executes script.js immediately before continuing to parse the HTML.
    - This can delay rendering and slow down the page load.
    - It can also cause errors as discussed above


2. The Defer mdoe:
    
    <script defer src="script.js"></script>

    Q. When to use it?
    - For scripts that depend on the DOM (e.g., when modifying the page).

    Q. How it works?
    - The script downloads in parallel with HTML parsing.
    - Execution happens only after the HTML document is fully parsed and DOM is fully built
    - Scripts execute in order if multiple defer scripts are used.


3. The Async mode: 

    <script async src="script.js"></script>

    Q. When to use it?
    - For scripts that don’t depend on the DOM (e.g., analytics, ads, tracking scripts).

    Q. How it works?
    - The script downloads in parallel with HTML parsing.
    - Once downloaded, it pauses HTML parsing to execute the script immediately.
    - Execution order is NOT guaranteed (whichever script loads first, runs first).

    Loading & Execution Flow:
    1. HTML parsing starts.
    2. Script starts downloading in parallel.
    3. When the script finishes downloading, it **immediately executes**, pausing HTML parsing.


    # Note: It is recommended to use defer mode as we need to manipulate the DOM as a web developer

 */