
const generateMemeBtn = document.querySelector('.meme-generator .meme-btn')
const memeTitle = document.querySelector('.meme-generator .meme-title')
const memeImage = document.querySelector('.meme-generator img')
const memeAuthor = document.querySelector('.meme-generator .meme-author')


const updateDetails = function(url,author,title){
  memeImage.setAttribute('src',url)
  memeTitle.innerHTML = author
  memeAuthor.innerHTML = title
}

const generateMeme = () => {
  fetch('https://meme-api.com/gimme/wholesomememes')  
  .then((response) => response.json())
  .then((data) => updateDetails(data.url,data.author,data.title))
  .catch((error) => console.error('Something went wrong',error))
}

generateMemeBtn.addEventListener('click',generateMeme)
