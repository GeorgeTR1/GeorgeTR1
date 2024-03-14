posts = document.querySelectorAll("shreddit-post"); 
out = "";

for (post of posts) {
  out += post.permalink + "\n";
}

console.log(out);
