function introduction(name){
    console.log(`Hi, my name is ${name}.`)
}

function introductionWithLanguage(name, language){
    console.log (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

//introduction('John');
//introductionWithLanguage('John', 'JavaScript');

function introductionWithLanguage(name, language="JavaScript"){
    console.log (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguage('John',);