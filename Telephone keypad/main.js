let numbers = new Array(11);
numbers[0] = "1";
numbers[1] = "2";
numbers[2] = "3";
numbers[3] = "4";
numbers[4] = "5";
numbers[5] = "6";
numbers[6] = "7";
numbers[7] = "8";
numbers[8] = "9";
numbers[9] = "*";
numbers[10] = "0";
numbers[11] = "#";

let letter = new Array(11);
letter[0] = "o_o";
letter[1] = "abc";
letter[2] = "def";
letter[3] = "ghi";
letter[4] = "jkl";
letter[5] = "mno";
letter[6] = "pqrs";
letter[7] = "tuv";
letter[8] = "wxyz";
letter[9] = " ";
letter[10] = " ";
letter[11] = " ";


let text = "";
let counter = 0;
let clicked = false;

// function to create the 12 div ( keypad buttons ). In the div I put the onclick function run() and I assign them a class and Id to style it in CSS.
// also every 3 div, the next div will appear in the second line to create a keypad style.

function start()
{

    let div_content ="";

    for (i=0; i<=11; i++)
    {
        let element = "number" + i;
        div_content = div_content + '<div class="letter" onclick="run('+i+')" id="'+element+'">'+numbers[i]+'<br>'+letter[i]+'</div>';
        if ((i+1) % 3 ==0) div_content = div_content + '<div style="clear:both;"></div>';
    }

    document.getElementById("key_cont").innerHTML = div_content;


}

//////////////////////////////////////////////////////////////////////Operating Script//////////////////////////////////////////////////

//function run will be activated when any of the div-button will be pressed, nr function argument will indicate which of the button has been pressed.

function run(nr) {

//for loop to assign addEventListener onmouseleave to all the buttons. it will activate the choiseAndReset function that will show the result on
//the display and will go to the next position in a way to choose another letter.

    for (i=0; i<=11; i++)
    {
        let element = "number" + i;
        document.getElementById(element).addEventListener("mouseleave", choiseAndReset);
    }

//switch will check which div button has been pressed and will display the correct letter.
//one to check the counter ( to check which letter need to be displayed )

    switch (nr) {
  case 0:
    counter ++;

        if(counter >= 6) {

        counter = 1;
        text = text.toString().replace(/.$/,".");
        document.getElementById("screen").value = text;
        //return counter;
    }
    else {
        if (counter % 3 == 0) {
            text = text.toString().replace(/.$/,"?");
            document.getElementById("screen").value = text;
        }

        else if (counter % 4 == 0){
            text = text.toString().replace(/.$/,"!");
            document.getElementById("screen").value = text;
        }

        else if (counter % 5 == 0){
            text = text.toString().replace(/.$/,"'");
            document.getElementById("screen").value = text;
        }

        else if (counter % 2 == 0) {
            text = text.toString().replace(/.$/,",");
            document.getElementById("screen").value = text;
        }

        else {
            text += ".";
            document.getElementById("screen").value = text;

        }
    }

    break;

  case 1:
    counter ++;

        if(counter >= 4) {

                counter = 1;
                text = text.toString().replace(/.$/,"a");
                document.getElementById("screen").value = text;

    }
    else {
        if (counter % 3 == 0) {

                text = text.toString().replace(/.$/,"c");
                document.getElementById("screen").value = text;

        }
        else if (counter % 2 == 0) {

                text = text.toString().replace(/.$/,"b");
                document.getElementById("screen").value = text;

        }
        else {

                text += "a";
                document.getElementById("screen").value = text;

        }
    }
    break;
  case 2:
     counter ++;

        if(counter >= 4) {

                counter = 1;
                text = text.toString().replace(/.$/,"d");
                document.getElementById("screen").value = text;


    }
    else {
        if (counter % 3 == 0) {

                text = text.toString().replace(/.$/,"f");
                document.getElementById("screen").value = text;

        }
        else if (counter % 2 == 0) {

                text = text.toString().replace(/.$/,"e");
                document.getElementById("screen").value = text;

        }
        else {

                text += "d";
                document.getElementById("screen").value = text;

        }
    }
    break;
  case 3:
    counter ++;

        if(counter >= 4) {

                counter = 1;
                text = text.toString().replace(/.$/,"g");
                document.getElementById("screen").value = text;

    }
    else {
        if (counter % 3 == 0) {

                text = text.toString().replace(/.$/,"i");
                document.getElementById("screen").value = text;

        }
        else if (counter % 2 == 0) {

                text = text.toString().replace(/.$/,"h");
                document.getElementById("screen").value = text;

        }
        else {

                text += "g";
                document.getElementById("screen").value = text;

        }
    }
    break;
  case 4:
    counter ++;

        if(counter >= 4) {

                counter = 1;
                text = text.toString().replace(/.$/,"j");
                document.getElementById("screen").value = text;

    }
    else {
        if (counter % 3 == 0) {

                text = text.toString().replace(/.$/,"l");
                document.getElementById("screen").value = text;

        }
        else if (counter % 2 == 0) {

                text = text.toString().replace(/.$/,"k");
                document.getElementById("screen").value = text;

        }
        else {

                text += "j";
                document.getElementById("screen").value = text;

        }
    }
    break;
  case 5:
    counter ++;

        if(counter >= 4) {

                counter = 1;
                text = text.toString().replace(/.$/,"m");
                document.getElementById("screen").value = text;

    }
    else {
        if (counter % 3 == 0) {

                text = text.toString().replace(/.$/,"o");
                document.getElementById("screen").value = text;

        }
        else if (counter % 2 == 0) {

                text = text.toString().replace(/.$/,"n");
                document.getElementById("screen").value = text;

        }
        else {

                text += "m";
                document.getElementById("screen").value = text;

        }
    }
    break;
  case 6:
    counter ++;

        if(counter >= 5) {

                counter = 1;
                text = text.toString().replace(/.$/,"p");
                document.getElementById("screen").value = text;

    }
    else {
        if (counter % 3 == 0) {

                text = text.toString().replace(/.$/,"r");
                document.getElementById("screen").value = text;

        }

        else if (counter % 4 == 0){

                text = text.toString().replace(/.$/,"s");
                document.getElementById("screen").value = text;

        }

        else if (counter % 2 == 0) {

                text = text.toString().replace(/.$/,"q");
                document.getElementById("screen").value = text;

        }

        else {

                text += "p";
                document.getElementById("screen").value = text;


        }
    }
    break;
  case 7:
    counter ++;

        if(counter >= 4) {

                counter = 1;
                text = text.toString().replace(/.$/,"t");
                document.getElementById("screen").value = text;

    }
    else {
        if (counter % 3 == 0) {

                text = text.toString().replace(/.$/,"v");
                document.getElementById("screen").value = text;

        }
        else if (counter % 2 == 0) {

                text = text.toString().replace(/.$/,"u");
                document.getElementById("screen").value = text;

        }
        else {

                text += "t";
                document.getElementById("screen").value = text;

        }
    }
    break;
  case 8:
    counter ++;

        if(counter >= 5) {

                counter = 1;
                text = text.toString().replace(/.$/,"w");
                document.getElementById("screen").value = text;

    }
    else {
        if (counter % 3 == 0) {

                text = text.toString().replace(/.$/,"y");
                document.getElementById("screen").value = text;

        }

        else if (counter % 4 == 0){

                text = text.toString().replace(/.$/,"z");
                document.getElementById("screen").value = text;

        }

        else if (counter % 2 == 0) {

                text = text.toString().replace(/.$/,"x");
                document.getElementById("screen").value = text;

        }

        else {

                text += "w";
                document.getElementById("screen").value = text;

        }
    }
    break;
  case 9:
    counter ++;

    if(counter >= 1) {
        text += "*";
        document.getElementById("screen").value = text;
    }

    break;
  case 10:
    counter ++;

    if(counter >= 1) {
        text += "0";
        document.getElementById("screen").value = text;
    }

    break;
  case 11:
    counter ++;

    if(counter >= 1) {
        text += "#";
        document.getElementById("screen").value = text;
    }

    break;

  }


function choiseAndReset() {

  document.getElementById("screen").value = text;
  counter = 0;
  return counter;


}

}
