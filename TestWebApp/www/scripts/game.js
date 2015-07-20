$(document).ready(function () {
    initBox();
    initFooter();
    initLife();
    var score = 0;
    var life = 2;
    $('#scoreDiv').text('score = ' + score);
    var color = ['red', 'blue', 'green', 'black', 'aqua', 'cyan', 'brown', 'pink', 'grey'];
    color = shuffle(color);

    $('#selectColor').css('background-color', color[5]);

    resetColor();

    //ONCLICK OF TABLE DATA EVENT
    $('.box').click(function () {
        var c = $(this).css('background-color');
        var d = $('#selectColor').css('background-color');
        if (c === d) {
            score++;
            $('#scoreDiv').empty();
            var label = '<label style="font-size:36px">Score : '+score+'</label>';
            $('#scoreDiv').append(label);
            resetColor();
            color = shuffle(color);
            $('#selectColor').css('background-color', color[5]);
            //$('#selectColorCircle').attr('background-color', color[5]);
        } else {
            if (life>0) {
                looseLife(life);
                life = life - 1;
            } else {
                window.localStorage.setItem('score',score);
                window.location = 'gameOver.html';
            }
            resetColor();
        }
    });
});

//FUNCTION TO SHUFFLE ARRAY ELEMENTS
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function resetColor() {
    var color = new Array();
    var col = ['red', 'blue', 'green', 'black', 'aqua', 'violet', 'brown', 'pink', 'grey'];
    var colorShuffled = shuffle(col);
    var boxes = $('.box');
    var ids = new Array();

    boxes.map(function (i, e) {
        ids.push($(this).attr('id'));
    });
    $.each(ids, function (i, e) {
        var element = $('#' + e);
        var colorSelected = colorShuffled[i];
        element.css('background-color', colorSelected);
    });

    return $('.box').css('background-color');
}

function initBox() {
    var boxDim;
    var h = Number($(window).height());
    var b = Number($(window).width());
    if (b > h) {
        boxDim = h / 3;
    } else {
        boxDim = b / 3;
    }

    $('.box').height(boxDim);
    $('.box').width(boxDim);
}

function initFooter() {
    var boxDim;
    var h = Number($(window).height());
    var b = Number($(window).width());
    if (b > h) {
        boxDim = h / 3;
    } else {
        boxDim = b / 3;
    }
    $('.scoreCard').height(boxDim);
    $('.scoreCard').width(boxDim);

    $('.selectBox').height(boxDim / 3);
    $('.selectBox').width(boxDim / 3);
    //$('#selectColor').height(boxDim / 3);
    //$('#selectColor').width(boxDim / 3);
}

function looseLife(life)
{
   $('#dil'+life).remove();
}

function initLife()
{
    for (var i = 0; i <= 2; i++) {
        $('#lifeDiv').append('<img id="dil' + i + '" height="20px" width="20px" src="images/life.png"/>');
    }
}



