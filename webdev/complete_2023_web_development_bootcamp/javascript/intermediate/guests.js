function is_guest(list, name){
    if (list.includes(name)){
        console.log(name + " is invited to the party!");
    }else{
        console.log("Sorry, " + name + " is not invited to the party.");
    }
}
function main(){
    var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

    is_guest(guestList, "Jeremy");
    is_guest(guestList, "Angela");
}


main();
