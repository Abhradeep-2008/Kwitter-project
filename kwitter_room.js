
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
   apiKey: "AIzaSyCweWYLmvs1jBF_NYdPPjEQ4lW5z-iISJw",
   authDomain: "kwitterproject-da106.firebaseapp.com",
   databaseURL: "https://kwitterproject-da106-default-rtdb.firebaseio.com",
   projectId: "kwitterproject-da106",
   storageBucket: "kwitterproject-da106.appspot.com",
   messagingSenderId: "569529673576",
   appId: "1:569529673576:web:53311e353673dac2cb58dd",
   measurementId: "G-Y2YSGQNWP4"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

    name_user = localStorage.getItem("user");
    document.getElementById("member").innerHTML = name_user;
    
    function addroom(){
       add_room = document.getElementById("room").value;
       firebase.database().ref("/").child(add_room).update({
             purpose: "adding roomname"
       });
       
       localStorage.setItem("room_name", add_room);
       window.location = "kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log("Room name - "+ Room_names);
         row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'># "+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row; 

      //End code
      });});}
getData();

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout(){
   localStorage.removeItem("room_name");
   localStorage.removeItem("user");
   window.location = "index.html";
}