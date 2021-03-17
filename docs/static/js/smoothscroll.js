/*
* Smooth scroll working on mobile
* https://stackblitz.com/edit/angular-rjzwqh?file=src/app/app.component.ts
*/
function smoothScroll(element) {
    let start = null;
    let target = element && element ? element.getBoundingClientRect().top : 0;
    let firstPos = window.pageYOffset || document.documentElement.scrollTop;
    let pos = 0;

    (function () {
        var browser = ['ms', 'moz', 'webkit', 'o'];

        for (var x = 0, length = browser.length; x < length && !window.requestAnimationFrame; x++) {
            window.requestAnimationFrame = window[browser[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[browser[x] + 'CancelAnimationFrame'] || window[browser[x] + 'CancelRequestAnimationFrame'];
        }
    })();

    function showAnimation(timestamp) {
        if (!start) {
            start = timestamp || new Date().getTime();
        } //get id of animation


        var elapsed = timestamp - start;
        var progress = elapsed / 600; // animation duration 600ms
        //ease in function from https://github.com/component/ease/blob/master/index.js

        var outQuad = function outQuad(n) {
            return n * (2 - n);
        };

        var easeInPercentage = +outQuad(progress).toFixed(2); // if target is 0 (back to top), the position is: current pos + (current pos * percentage of duration)
        // if target > 0 (not back to top), the positon is current pos + (target pos * percentage of duration)

        pos = target === 0 ? firstPos - firstPos * easeInPercentage : firstPos + target * easeInPercentage;
        window.scrollTo(0, pos);

        if (target !== 0 && pos >= firstPos + target || target === 0 && pos <= 0) {
            cancelAnimationFrame(start);

            if (element) {
                element.setAttribute("tabindex", -1);
                //element.focus();
            }

            pos = 0;
        } else {
            window.requestAnimationFrame(showAnimation);
        }
    }

    window.requestAnimationFrame(showAnimation);
}