// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function send()
{
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0,
    })
    msg=document.getElementById("msg").value="";
}




