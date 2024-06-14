let question = Number(prompt('Enter your age! To quit app: type "quit" or "q"'));

while(question !== 'quit' && question !== 'q'){
    if(question > 0 && question < 17){
        console.log('You are teenager!');
        let gender = Number(prompt('Enter your gender: 1.Male or 2.Female'));
        if(gender === 1){
            console.log('You are male');
        } else if (gender === 2){
            console.log('You are female');
        } else {
            console.log('Incorrect number!');
        };
    } else if (question > 17 && question < 60){
        gender = Number(prompt('Enter your gender: 1.Male or 2.Female'));
        if(gender === 1){
            console.log('You are an adult!');
            console.log('You are male');
        } else if (gender === 2){
            console.log('You are female');
        } else {
            console.log('Incorrect number!');
        };
    } else if(question > 59 && question <= 65 ){
        gender = Number(prompt('Enter your gender: 1.Male or 2.Female'));
        if(gender === 2){
            console.log('You are female pensioner!');
        } else if(gender === 1){
            console.log('You are pensioner!');
        } else {
            console.log('Incorrect number!');
        };
    } else if (question >65 && question < 120){
        gender = Number(prompt('Enter your gender: 1.Male or 2.Female'));
        if(gender === 1){
            console.log('You are male pensioner!');
        } else if (gender === 2){
            console.log('You are female pensioner!');
        } else {
            console.log('Incorrect number!');
        };
    }
    question = prompt('Enter your age!');
}
console.log('You quit the app!');
