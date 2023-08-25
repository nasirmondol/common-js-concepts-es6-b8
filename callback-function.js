function personName(Welcome, thanks){
    Welcome(thanks);
}

function greetings(thanks){
    console.log("Welcome to my world!!", thanks);
}
const name = personName(greetings, 'Thank you so much')