angular.module("turingMachine",[]).controller("appController", function($scope){

   $scope.tape = [];
   $scope.resolve = {};
   $scope.inputLog = [];
   $scope.turing = {};
   lines = [];
   $scope.transitionFunctions = [];
   $scope.functionsPerState = [];
   $scope.inputList = [];
   currentState = "0";
   $scope.pointer = 0;
   
   saveFunctionPerState = function(){
    var contador = 0;
    var flag = false;
    for(i = 0; i < $scope.transitionFunctions.length; i++){
        
        if($scope.transitionFunctions[i].currentState == String(contador)){
            if(flag){
                $scope.functionsPerState[contador].push($scope.transitionFunctions[i]);
            }else{
                $scope.functionsPerState[contador] = [];
                $scope.functionsPerState[contador].push($scope.transitionFunctions[i]);
                flag = true;
            }
            
        }else{
            contador += 1;
            $scope.functionsPerState[contador] = [];
            $scope.functionsPerState[contador].push($scope.transitionFunctions[i]);
            flag = true;
        }

        console.log('contador ' + String(contador) + "current state " + $scope.transitionFunctions[i].currentState);
        
    }
   }

   isZero = function(number){
    if(number === 0){
        return true;
    }
    return false;
   };

   write = function(index, valor, write){
    if(write){
        $scope.inputList[index] = valor;
    }
    
   }

   moveToRigth = function(){
    console.log("moveToRigth");
    $scope.pointer += 1;
   }

   moveToLeft = function(){
    $scope.pointer -=1;
    console.log(moveToLeft);
   }

   splitInput = function(){
    $scope.inputList = $scope.resolve.input.split("");
    $scope.inputList.push("B");
   }

   splitFunctions = function(){
    splitInput();
    var line = "";
    var contador = 0;
    for(i = 0; i <= $scope.turing.text.length; i ++){
        if(contador < 9){
            line = line + $scope.turing.text[i];
            contador += 1;
        }else if (contador == 9){
            lines.push(line);

            contador = 0;
            line = "";
        }
    };

   };

   convertLineInFunction = function(){
        for(i = 0; i <  lines.length; i++ ){
            var transitionFunction = {
                "currentState" : lines[i][0],
                "letter" : lines[i][2],
                "letterWrite": lines[i][4],
                "diretion": lines[i][6],
                "netxState" : lines[i][8]

            }

            $scope.transitionFunctions.push(transitionFunction);
        }
   }

   $scope.runMachine = function(){
    

    splitFunctions();
    splitInput();
    convertLineInFunction();
    saveFunctionPerState();
    var contador = 0;

    while(currentState != "A" && currentState != "R" && contador < 100){

        var currentFunction = $scope.functionsPerState[Number(currentState)];

        console.log($scope.inputList);
        

        if (currentFunction[0].letter == $scope.inputList[$scope.pointer]) {
            console.log(currentFunction[0].letter + " " + $scope.inputList[$scope.pointer]);
            console.log(currentFunction[0]);
            write($scope.pointer, currentFunction[0].letterWrite, true);
            if(currentFunction[0].diretion == "R"){
                //moveToRigth();
                $scope.pointer = $scope.pointer + 1;

            }else if(currentFunction[0].diretion == "L"){
                //moveToLeft();
                $scope.pointer = $scope.pointer - 1;
            }

            
            currentState = currentFunction[0].netxState ;

        }else if(currentFunction[1].letter == $scope.inputList[$scope.pointer]) {
            console.log(currentFunction[1].letter + " " + $scope.inputList[$scope.pointer]);
            console.log(currentFunction[1]);

            write($scope.pointer, currentFunction[1].letterWrite, true);
            if(currentFunction[1].diretion == "R"){
                //moveToRigth();
                $scope.pointer = $scope.pointer + 1;
            }else if(currentFunction[1].diretion == "L"){
                //moveToLeft();
                $scope.pointer = $scope.pointer - 1;
            }

            currentState = currentFunction[1].netxState ;
        }else if(currentFunction[2].letter == $scope.inputList[$scope.pointer]) {
            console.log(currentFunction[2].letter + " " + $scope.inputList[$scope.pointer]);
            console.log(currentFunction[2]);

            write($scope.pointer, currentFunction[2].letterWrite, true);
            if(currentFunction[2].diretion == "R"){
                //moveToRigth();
                $scope.pointer = $scope.pointer + 1;
            }else if(currentFunction[2].diretion == "L"){
                //moveToLeft();
                $scope.pointer = $scope.pointer - 1;
            }

            currentState = currentFunction[2].netxState ;

        }else if(currentFunction[3].letter == $scope.inputList[$scope.pointer]) {
            console.log(currentFunction[3].letter + " " + $scope.inputList[$scope.pointer]);
            console.log(currentFunction[3]);

            write($scope.pointer, currentFunction[3].letterWrite, true);
            if(currentFunction[3].diretion == "R"){
                //moveToRigth();
                $scope.pointer = $scope.pointer + 1;
            }else if(currentFunction[3].diretion == "L"){
                //moveToLeft();
                $scope.pointer = $scope.pointer - 1;
            }

            currentState = currentFunction[3].netxState ;

        }else if(currentFunction[4].letter == $scope.inputList[$scope.pointer]) {
            console.log(currentFunction[4].letter + " " + $scope.inputList[$scope.pointer]);
            console.log(currentFunction[4]);

            write($scope.pointer, currentFunction[4].letterWrite, true);
            if(currentFunction[4].diretion == "R"){
                //moveToRigth();
                $scope.pointer = $scope.pointer + 1;
            }else if(currentFunction[4].diretion == "L"){
                //moveToLeft();
                $scope.pointer = $scope.pointer - 1;
            }

            currentState = currentFunction[4].netxState ;
        }else if(currentFunction[5].letter == $scope.inputList[$scope.pointer]) {
            console.log(currentFunction[5].letter + " " + $scope.inputList[$scope.pointer]);
            console.log(currentFunction[5]);

            write($scope.pointer, currentFunction[5].letterWrite, true);
            if(currentFunction[5].diretion == "R"){
                //moveToRigth();
                $scope.pointer = $scope.pointer + 1;
            }else if(currentFunction[5].diretion == "L"){
                //moveToLeft();
                $scope.pointer = $scope.pointer - 1;
            }

            currentState = currentFunction[5].netxState ;
        }



        /*if(currentState == "0"){
            if($scope.inputList[$scope.pointer] === $scope.transitionFunctions ){
                writeX($scope.pointer);
                $scope.pointer += 1;
                currentState = "0";
            }

            console.log($scope.functionsPerState);
            break;
        }
        if(currentState == "0"){
            console.log('state 0');
            if($scope.inputList[$scope.pointer] === "0"){
                writeX($scope.pointer);
                $scope.pointer += 1;
                currentState = "0";
            }else if($scope.inputList[$scope.pointer] === "1"){
                writeX($scope.pointer);
                $scope.pointer +=1;
                currentState = "1";
            }
        }else if(currentState == "1"){
            console.log('state 1');
            if($scope.inputList[$scope.pointer] === "0"){
                writeX($scope.pointer);
                $scope.pointer += 1;
                currentState = "2";
            }else if($scope.inputList[$scope.pointer] === "1"){
                currentState = "R";
                break;
            }
        }else if(currentState == "2"){
            console.log('state 2');
            if($scope.inputList[$scope.pointer] === "B"){
                currentState = "A";
                break;
            }else {
                currentState = "R";
                break;
            }
        }*/
        contador += 1;
        console.log(currentState);
        console.log('pointer ' + $scope.pointer);
    }

    if(currentState == "A"){
        console.log('accepted');
    }else if(currentState == "R"){
        console.log('rejected');
    }
   
   }


   $scope.generateTape = function(){
        $scope.tape = $scope.resolve.input.split("");
        $scope.inputLog = [];
        if($scope.resolve.alg === "010"){
            goTo010InitialState($scope.tape);
        }else if($scope.resolve.alg === "PALIND"){
            goToPalindInitialState($scope.tape);
        }else{
            goTo01InitialState($scope.tape);
        }
   };


   // =========================== PALINDROME ===============================
   function goToPalindInitialState(input){
       $scope.inputLog.push(" === Is Plalimdrom? === ");
        console.log('at initial state:' + input);
        console.log('turing.text ' + $scope.turing.text.split());
        //splitInput();
        console.log($scope.turing.text.length);
        $scope.runMachine();
        $scope.inputLog.push("qInicial: " + input.join(""));
        if(input.length === 0){
            accept();
        }else{
            goToPalindState2(input, input[0]);
        }
    };

    function goToPalindState2(input){
        console.log('at state 2: ' + input);
        $scope.inputLog.push("q2: " + input.join(""));
        if(input.length === 1){
            reject();
            return;
        }

        if(input.length === 0){
            accept();
            return;
        }

        pointer = input[0];
        input.shift();
        goToPalindState3(input, pointer);
    };

    function goToPalindState3(input, pointer){
        console.log('at state 3: ' + input);
        $scope.inputLog.push("q3: " + input.join(""));
        if(input[input.length-1] === pointer){
            input.splice(-1,1);
            goToPalindState2(input);
        }else{
            reject();
        }
    };



   // =========================== 01*0 ===============================
   function goTo010InitialState(input){
        $scope.inputLog.push(" === Respects 01*0? === ");
        $scope.inputLog.push("qInicial: " + input.join(""));
        if(input[0] === '0'){
            input.shift();
            goTo010MiddleState(input);
        }else{
            reject();
        }
    };

    function goTo010MiddleState(input){
        while(input[0] === '1'){
            $scope.inputLog.push("q1: " + input.join(""));
            input.shift();
        };
        goTo010FinalState(input);
    };

    function goTo010FinalState(input){
        $scope.inputLog.push("qFinal: " + input.join(""));
        (input.length === 1) ? accept() : reject();
    };

    // =========================== 010101** ===============================
   function goTo01InitialState(input){
        $scope.inputLog.push(" === Respect 0101? === ");
        goTo01State1(input);
    };

    function goTo01State1(input){
        $scope.inputLog.push("q1: " + input.join(""));
        if(input.length === 0){
            accept();
            return;
        }else if(input[0] === '0'){
            input.shift();
            goTo01State2(input);
        }else{
            reject();
        }
    };

    function goTo01State2(input){
        $scope.inputLog.push("q2: " + input.join(""));
        if(input.length === 0){
            reject();
            return;
        } else if(input[0] === '1'){
            input.shift();
        }else{
            reject();
        }
        goTo01State1(input);
    };



    // =========================== Shared ===============================
    function accept(){
        $scope.inputLog.push("ACCEPTED");
        accepted = true;
    };

    function reject(){
        $scope.inputLog.push("REJECTED");
        accepted = false;
    };

});

/*
0*10
0 0 x R 0
0 1 x R 1
1 0 x R 2
1 1 x R R
2 B x _ A
2 0 x _ R*/

/* conter 010
0 0 x R 1
0 1 y R 0
0 B B R R
1 0 x R 1
1 1 y R 2
1 B B R R
2 0 x R A
2 1 y R 0
2 B B R R*/

/*
0n 1n
0 0 x R 1
0 y y R 3
0 B B L A
1 0 0 R 1
1 y y R 1
1 1 y L 2
2 0 0 L 2
2 y y L 2
2 x x R 0
3 y y R A
3 B B L A
*/

/*
0 0 x R 1
0 1 1 R R
0 y y R 6
0 B B L A
1 0 0 R 1
1 y y R 5
1 1 y R 2
2 1 y L 3
3 y y L 4
4 0 0 L 4
4 y y L 4
4 x x R 0
5 1 y R 2
5 y y R 5
6 y y R 6
6 B B R A
6 1 1 R R
*/

/*
0n12n
0 0 x R 1
0 1 1 R R
0 y y R 6
0 B B L A
1 0 0 R 1
1 y y R 5
1 1 y R 2
1 B B R R
2 1 y L 3
2 B B R R
3 y y L 4
4 0 0 L 4
4 y y L 4
4 x x R 0
5 1 y R 2
5 y y R 5
6 y y R 6
6 B B R A
6 1 1 R R
*/

/*
palindromo
0 1 x R 1
0 0 x R 5
1 0 0 R 1
1 1 1 R 1
1 # # R 2
2 0 0 R 2
2 1 1 R 2
2 B B L 3
2 x x L 3
3 0 0 R R
3 1 x L 4
4 1 1 L 4
4 0 0 L 4
4 # # L 8
5 1 1 R 5
5 0 0 R 5
5 # # R 6
6 0 0 R 6
6 1 1 R 6
6 B B L 7
6 x x L 7
7 1 1 R R
7 0 x L 4
8 0 0 L 9
8 1 1 L 9
8 x x L A
9 0 0 L 9
9 1 1 L 9
9 x x R 0

*/
