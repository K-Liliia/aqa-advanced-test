let users = [
    {name: "Nick", age: "18", userId: "345678", email: "nick_johanson@gmail.com"},
    {name: "Bill", age: "27", userId: "456763", email: "bill_wilson@@gmail.com"},
    {name: "Alex", age: "32", userId: "456767", email: "alex_corman@gmail.com"},
    {name: "Shon", age: "41", userId: "675884", email: "shon_kaspian@gmail.com"}
]

for(const people of users){
    let {name, age, userId, email} = people;
    console.log(name, age, userId, email);
}