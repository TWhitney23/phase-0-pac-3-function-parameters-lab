
function introduction(Aki) {
    return `Hi, my name is ${Aki}.`;
}

function introductionWithLanguage(EmberJs) {
    return `{EmberJs}.`;
}


function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  



  function introductionWithLanguageOptional(name, language) {
    language = language || "Python";
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }



  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguageOptional("Gracie")); 