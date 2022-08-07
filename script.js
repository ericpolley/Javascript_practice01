const myButton = document.getElementById('button1');
const boxLeftAction = document.getElementById('boxLeft');
const boxRightAction =  document.getElementById('boxRight');
const darkModeButton = document.getElementById('button2');
let counter = 1;
let darkMode = 1;

darkModeButton.addEventListener('click', function onClick(event) {
    darkMode++;
    if (darkMode == 1) {
        
        
    }
    if (darkMode == 2) {
        document.body.style.backgroundColor = 'black';
        document.getElementById('button1').style.color = 'white';
        document.getElementById('button2').style.color = 'white';
        document.getElementById('button1').style.backgroundColor = 'black';
        document.getElementById('button2').style.backgroundColor = 'black';
        document.getElementById('button1').style.border = '1px solid white';
        document.getElementById('button2').style.border = '1px solid white';
        document.getElementById('casketMain1').style.backgroundColor = 'grey';
        document.getElementById('casketMain2').style.backgroundColor = 'grey';
        document.getElementById('casketMain1').style.border = '10px solid white';
        document.getElementById('casketMain2').style.border = '10px solid white';
        document.getElementById('boxLeft').style.border = '10px solid white';
        document.getElementById('boxRight').style.border = '10px solid white';
    }
    if (darkMode >= 3) {
         darkMode = 1;   
         document.body.style.backgroundColor = 'brown'; 
         document.getElementById('button1').style.color = 'black';
        document.getElementById('button2').style.color = 'black';
        document.getElementById('button1').style.backgroundColor = 'white';
        document.getElementById('button2').style.backgroundColor = 'white';
        document.getElementById('button1').style.border = '1px solid black';
        document.getElementById('button2').style.border = '1px solid black';
        document.getElementById('casketMain1').style.backgroundColor = 'burlywood';
        document.getElementById('casketMain2').style.backgroundColor = 'burlywood';
        document.getElementById('casketMain1').style.border = '10px solid black';
        document.getElementById('casketMain2').style.border = '10px solid black';
        document.getElementById('boxLeft').style.border = '10px solid black';
        document.getElementById('boxRight').style.border = '10px solid black';
    }

} );

myButton.addEventListener('click', function onClick(event) {

    counter++;
  
    if (counter == 2) {
        boxLeftAction.style.backgroundColor = 'pink';
        boxRightAction.style.backgroundColor = 'orange'; 
        };

        if (counter == 3) {
            boxLeftAction.style.backgroundColor = 'black';
            boxRightAction.style.backgroundColor = 'white'; 
        };
        
        if (counter == 4) {
            boxLeftAction.style.backgroundColor = 'grey';
            boxRightAction.style.backgroundColor = 'purple'; 
        };

        if (counter == 5) {
            counter = 1;
            boxLeftAction.style.backgroundColor = 'blue';
        boxRightAction.style.backgroundColor = 'green'; 
        };

    

     
    

  



 

    

    

    

    
    

    

});


    
