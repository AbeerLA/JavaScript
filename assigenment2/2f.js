let fullName = (fn,mn,ln) => {
    return `${fn} ${mn} ${ln}, ${getTitle()}`;

}
let getTitle = () =>{
    return "B.Sc"
}
console.log(fullName("John", "Dream", "Myung"))

//JavaScript code snippet combining fullName and 
//getTitle functions to construct and display a full name with a title.