// Can create a table similar to last class or populate a table or list to pop up with the names 
// So add another section in HTML dedicated to the form 

let friendsList = [
    {
        'first name': 'Tiffany',
        'last Name': 'Chan',
        'favourite Hobby': 'Volleyball',
        'preferred Icecream flavour':'Mango',
        'year In sfu':'Third Year'

    }
];


function generateFriendsTable(_result){
    let tableBody= document.querySelector("#friends-table-body");
    tableBody.innerHTML=""

    let table= document.querySelector("#friends-table");
}

_result.forEach(_result=>{

    const tr=table.insertRow(0);

    let firstName = tr.insertCell(0);
        let lastName = tr.insertCell(1)
    let favouriteHobby = tr.insertCell(2);
        let preferredIcecreamFlavour = tr.insertCell(3);
    let yearInSfu = tr.insertCell (4);


    firstName.innerHTML =_result['First name'];
    lastName.innerHTML =_result['Last name'];
    favouriteHobby.innerHTML = _result['Favourite hobby'];
    preferredIcecreamFlavour.innerHTML = _result['Preferred Icecream Flavour'];
    yearInSfu.innerHTML = _result['Year in SFU'];

    tableBody.appendChild(tr);
});

let submitButtom = document.querySelector("submit");

submitButton.addEventListener('click',()=>{
    let firstName = document.querySelector("fname").value;
let lastName = document.querySelector("lname").value;
    let favouriteHobby = document.querySelector ("hobby").value;
let preferredIcecreamFlavour = document.querySelector ("iceCream").value;
    let yearInSfu = document.querySelector("sfuYear").value;

    friendsList.push({
        'firstName':firstName,
        'lastName':lastName,
        'favouriteHobby':favouriteHobby,
        'preferredIcecreamFlavour':preferredIcecreamFlavour,
        'yearInSFU':yearInSfu
    });

    generateFriendsTable(friendsList);

})