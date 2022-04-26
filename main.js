var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.pinimg.com/564x/e1/8f/4a/e18f4a4c8e716afeb5a1bbf598db00be.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Venkappa", "Shobha", "Manish Mulimani", "Poonam Manish"];
var i = 0;
function update() {
  i++;
  if(i > names.length - 1) {
        i = 0;
  }
  document.getElementById("familyMemberPic").src = images[i];
  document.getElementById("familyMemberName").innerHTML = names[i];
}
