let question = Number(prompt('Enter your age! To quit app: type "quit" or "q"'));

while(question !== 'quit' && question !== 'q'){
    if(question > 0 && question <= 17){
        let gender = Number(prompt('Enter your gender: 1.Male or 2.Female'));
        if(gender === 1){
            console.log('You are male teenager!');
        } else if (gender === 2){
            console.log('You are female teenager!');
        } else {
            console.log('Incorrect number!');
        };
    } else if (question >= 18 && question <= 60){
        gender = Number(prompt('Enter your gender: 1.Male or 2.Female'));
        if(gender === 1){
            console.log('You are an adult male!');
        } else if (gender === 2){
            console.log('You are and adult female!');
        } else {
            console.log('Incorrect number!');
        };
    } else if(question >= 61 && question <= 65 ){
        gender = Number(prompt('Enter your gender: 1.Male or 2.Female'));
        if(gender === 2){
            console.log('You are a female pensioner!');
        } else if(gender === 1){
            console.log('You are pensioner!');
        } else {
            console.log('Incorrect number!');
        };
    } else if (question >= 66 && question < 120 ){ //:D
        gender = Number(prompt('Enter your gender: 1.Male or 2.Female'));
        if(gender === 1){
            console.log('You are a male pensioner!');
        } else if (gender === 2){
            console.log('You are a pensioner!');
        } else {
            console.log('Incorrect number!');
        };
    }
    question = prompt('Enter your age!');
}
console.log('You quit the app!');
