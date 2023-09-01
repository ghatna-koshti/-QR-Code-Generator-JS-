const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput()
});

downloadBtn.addEventListener("click",()=>{
    let img = document.querySelector('.qr-body img');

    if(img!=null){
        let imgAtr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtr);
        downloadBtn.setAttribute("download", "QR_Code.png");
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
        alert("QR Code not generated yet.");
    }

})

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInput()
});

function isEmptyInput() {
//   if (qrText.value.length > 0) {
//     generateQRCode();
//   } else {
//     alert("Enter the text or URL to generate QR Code");
//   }
  (qrText.value.length > 0)?generateQRCode():alert("Enter the text or URL to generate QR Code");
}

let size = sizes.value;

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
