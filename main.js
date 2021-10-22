const linksSocialMedia = {
  github: "renanbrizola",
  youtube: "channel/UC4EY-RdZzTRum0CHszYCr_g/videos",
  facebook: "renanbrizola",
  instagram: "renanbrizola",
  twitter: "renanbrizola"
}
 function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    
  }
 }

 changeSocialMediaLinks()

 function getGitHubProfileInfos() {
   const url = `https://api.github.com/users/${linksSocialMedia.github}`
   
  fetch(url)
  .then(response => response.json()) 
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    serLogin.textContent = data.login
    })
 }

 getGitHubProfileInfos()