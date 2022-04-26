var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "file:///Users/manish/Desktop/Ishaan/ADVC78template-main/grandma.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
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
