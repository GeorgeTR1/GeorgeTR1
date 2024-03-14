posts = document.querySelectorAll("shreddit-post"); 
out = "";

for (post of posts) {
  out += post.contentHref + "\n";
}

console.log(out);
