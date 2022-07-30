
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyAAH8gPS2gtPGqTCA8WAg4KXxDietrWqLw",
  authDomain: "kwitter-test-53cef.firebaseapp.com",
  databaseURL: "https://kwitter-test-53cef-default-rtdb.firebaseio.com",
  projectId: "kwitter-test-53cef",
  storageBucket: "kwitter-test-53cef.appspot.com",
  messagingSenderId: "138463011425",
  appId: "1:138463011425:web:c79e7b6bf44373af378020"
};

   
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
