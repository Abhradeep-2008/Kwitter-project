//YOUR FIREBASE LINKS

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

    var user = localStorage.getItem("user");
    var room_name = localStorage.getItem("room_name");

    function send(){
          var chat = document.getElementById("message").value;
          firebase.database().ref(room_name).push({
             name: user, 
             message: chat,
             like: 0,
          });

          document.getElementById("message").value = "";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 console.log(firebase_message_id);
 console.log(message_data);

 message = message_data['message'];
 name = message_data['name'];
 like = message_data['like'];

 name_with_tag = "<h4>"+name+ "<img class = 'user_tick' src = 'tick.png'></h4>";
 message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
 like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updateLike(this.id)'>";
 span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

 row = name_with_tag + message_with_tag + like_button + span_with_tag;
 document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updateLike(message_id){
  console.log("click on this button to"+ message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes)+1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
  });
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user");
      window.location = "index.html";
   }