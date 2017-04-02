angular.module("turingMachine",[]).controller("appController", function($scope){

   $scope.tape = [];
   $scope.resolve = {};
   $scope.inputLog = [];

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