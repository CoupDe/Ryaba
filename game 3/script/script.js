var rr = new Set();
var ss;
var fr = [];
var currentCount = 1;
$.getJSON(
    'https://api.myjson.com/bins/jcmhn',
    function (story) {
        ss = story.text;
        let arr = [];
        let vari = [];

        class Line {
            constructor(line, par) {
                this.line = line,
                    this.par = par
            }
        }
        fr = new Array(story.text.join(' '));

        printAllStory(fr);

        function logArrayElements(element, index) {
            let pp = Array.from(stopTyped(element));
            for (let key in pp) {
                vari.push(String(pp[key]));

            }
            let fda = new Line(ss[index], pp);
            arr.push(fda);
        }

        ss.forEach(logArrayElements);
        rr = new Set(vari);
        rr = Array.from(rr);

    });



function printAllStory(arr, stop) {
    console.log(arr)
    if (stop != true) {
        let typed = new Typed('.element', {


            strings: arr,
            stringsElement: null,
            typeSpeed: 1,
            startDelay: 0,
            showCursor: false,
            cursorChar: "|",
            attr: null,
            loopCount: false,
            onStringTyped: function () {
                changPlace(0);
            },
        });

    } else {
        var elem = document.getElementById("qqq");
        elem.remove();
        let typed2 = new Typed('.element2', {
            strings: arr,
            stringsElement: null,
            typeSpeed: 1,
            startDelay: 0,
            showCursor: false,
            cursorChar: "|",
            attr: null,
            loopCount: false,
            onStringTyped: function () {
                alert('Gooooood JOB!');
            },
        })
        
    }

}

function labelMark(place) {
    let el = document.getElementById("newVal");
    el.innerText = place;
};

//-----------------Start typed


function stopTyped(curStr) {
    let regexp = /{[^\}]+(?=})}/gi //регулярка для поиска внутри
    let result = curStr.matchAll(regexp);
    return result;
};

function keyPress(e) {

    if (e.keyCode == 13) {
        e.preventDefault()
        countRabbits();
    }
}
//Обработчик кнопки
function countRabbits() {


    function makeCounter() {
        return function () {
            return currentCount++;
        };
    }

    var counter = makeCounter();

    let varText = document.getElementById('setholder').value;
    let varReplace = document.getElementById("newVal").innerText;
    changeText(varText, varReplace)
    document.getElementById('setholder').value = '';
    changPlace(counter());

};







function changeText(varText, varReplace) {

    let fdr = String(fr[0]);
    let wer = fdr.replace(new RegExp(varReplace, 'g'), varText);
    fr[0] = wer;

}

//Замена placeholdera
function changPlace(n) {

    //alert(rr);

    if (n == rr.length) {
       
        printAllStory(new Array(fr.join(' ')), stop = true);
        // printAllStory(fr, );

    }
    let holder = rr[n];
    // console.log(vari);
    //alert(holder);
    //document.getElementsByClassName('form-control')[1].placeholder=holder;
    let inp = document.getElementById('setholder');
    inp.focus();
    inp.setAttribute('placeholder', holder);
    labelMark(inp.getAttribute('placeholder'));
    //  let holderField = document.getElementById('setholder');
    // holderField.placeholder = holder;
};



function getInput() {
    let dd = countRabbits();

    return dd;




}