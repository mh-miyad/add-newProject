////////////////////// IMAGE UPLOAD => DRAG & DROP
let files = [];
const form = document.querySelector('.upload-img-form');
// where the img will show
const imgContainer = document.querySelector('.product-photo');
const select = document.querySelector('.upload-pic img');
const inputFile = document.querySelector('.upload-img-form input');
select.addEventListener('click', ()=> inputFile.click());
inputFile.addEventListener('change',()=>{
  let file = inputFile.files;
  for(i=0; i< file.length; i++){

    if(files.every(e => e.name !== file[i].name)){
      files.push(file[i])
    }
  }
  // reseting form
  form.reset();
  showImg();
})
/////////////////////////// show img
const showImg = () => {
  let images = '';
  files.forEach((e,i) => {
    images += ` <div class="product product-1">
               <div
                class="product-circle d-flex justify-content-center align-items-center"
                           >
                  <i class="fas fa-times" onclick='delImage(${i})'></i>
                </div>
              <img
                src="${URL.createObjectURL(e)}"
                alt="cup-png"
              />
            </div>`
  })
  imgContainer.innerHTML = images;
}
//////////////////////////// delet image 
const delImage = i => {
  files.splice(i,1);
  showImg()
}
/////////////////////////// DRAG AND DROP
dropImgZone.addEventListener('dragover',e=>{
  e.preventDefault();
  dropImgZone.classList.add('dragover')
})
dropImgZone.addEventListener('dragleave',e=>{
  e.preventDefault();
  dropImgZone.classList.remove('dragover')
})
dropImgZone.addEventListener('drop',e=>{
  e.preventDefault();
  dropImgZone.classList.remove('dragover');
  let file = e.dataTransfer.files;
  for(i=0; i < file.length; i++){
    if(files.every(e => e.name !== file[i].name)){
      files.push(file[i])
    }
  }
  showImg()
})


////////////////////// VIDEO UPLOAD => DRAG & DROP
let vidFiles = [];
const vidForm = document.querySelector('.upload-video-form');
// where the img will show
const vidContainer = document.querySelector('.product-video-photo');
const selectVid = document.querySelector('.upload-video img');
const vidInput = document.querySelector('.upload-video-form input');
selectVid.addEventListener('click', ()=> vidInput.click());

vidInput.addEventListener('change',()=>{
  let file = vidInput.files;
  for(i=0; i< file.length; i++){
    if(vidFiles.every(e => e.name !== file[i].name)){
      vidFiles.push(file[i])
    }
  }
  // reseting form
  form.reset();
  showVideo();
})

/////////////////////////// show video
const showVideo = () => {
  let videos = '';
  vidFiles.forEach((e,i) => {
    videos += ` <div class="product product-1">
               <div
                class="product-circle d-flex justify-content-center align-items-center"
                           >
                  <i class="fas fa-times" onclick='delVideo(${i})'></i>
                </div>
                <video width="100" height="80" controls>
                <source src="${URL.createObjectURL(e)}" type="video/mp4">
                </video> 
            </div>`
  })
  vidContainer.innerHTML = videos;
}
//////////////////////////// delet video 
const delVideo = i => {
  vidFiles.splice(i,1);
  showVideo()
}
/////////////////////////// DRAG AND DROP for video
dropVidZone.addEventListener('dragover',e=>{
  e.preventDefault();
  dropVidZone.classList.add('dragover')
})
dropVidZone.addEventListener('dragleave',e=>{
  e.preventDefault();
  dropVidZone.classList.remove('dragover')
})
dropVidZone.addEventListener('drop',e=>{
  e.preventDefault();
  dropVidZone.classList.remove('dragover');
  let file = e.dataTransfer.files;
  for(i=0; i < file.length; i++){
    if(vidFiles.every(e => e.name !== file[i].name)){
      vidFiles.push(file[i])
    }
  }
  showVideo()
})