let name='jack';
let language='javascript'

function introduction(name){
   let str=`Hi, my name is ${name}.`
   return str;
}

function introductionWithLanguage(name, language){
   let str=`Hi, my name is ${name} and I am learning to program in ${language}.`
   return str;
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
   let str=`Hi, my name is ${name} and I am learning to program in ${language}.`
   return str;
}
introductionWithLanguageOptional(name);