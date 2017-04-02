var input = "011111111101".split("");
var accepted;

function goToInitialState(input){
    console.log('at initial state:' + input);
    if(input[0] === '0'){
        input.shift();
        goToMiddleState(input)
    }else{
        reject();
    }
};

function goToMiddleState(input){
    console.log('at middle state:' + input);
    while(input[0] === '1'){
        input.shift();
    };
    goToFinalState(input);
};

function goToFinalState(input){
    console.log('at final state:' + input);
    (input.length === 1) ? accept() : reject();
};

function accept(){
    console.log('ACCEPTED!');
    accepted = true;
};

function reject(){
    console.log('REJECTED!');
    accepted = false;
};



goToInitialState(input);