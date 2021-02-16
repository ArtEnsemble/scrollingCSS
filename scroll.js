//var boxes = Array.from(document.querySelectorAll('.box'));

var boxes = Array.prototype.slice.call(document.querySelectorAll('.svg-wrap'));


// Define how much of the element is shown before something happens.
var scrollClipHeight = 0;






// Function to change an element's CSS when it is scrolled in.
var checkScroll = function checkScroll() {
/* 
console.log(element.getBoundingClientRect());

console.log(`Position: ${(window.innerHeight + window.scrollY) - scrollClipHeight}` );
*/
   
    /** When the window vertical scroll position plus the
     *   window's inner height has reached the
     *   top position of your element.
    */
    boxes.forEach(function(el)
    {
        if (
            /* (window.innerHeight + window.scrollY) - (scrollClipHeight || 0) >= */
            el.getBoundingClientRect().top <= 500 && el.getBoundingClientRect().top >= 50
     )
         // Generally, something is meant to happen here.
        { console.log('in view');
        console.log(el);
         el.classList.add('showMe');
     }
     else {
         el.classList.remove('showMe');
     }
     
    })
    
        
};

// Call the function without an event occurring.
checkScroll();

// Call the function when the 'window' scrolls.
document.getElementById('s4-workspace').addEventListener("scroll", _.debounce(checkScroll, 250));

// manual trigger

var bigBox = Array.prototype.slice.call(document.querySelectorAll('.svg-wrap'));

bigBox.forEach(function(el) {
    el.addEventListener('click', function() {
        this.classList.add('showMe');
    })
})