const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});

downloadBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default behavior of the anchor tag

  let img = document.querySelector('.qr-body img');

  if (img != null) {
    let imgSrc = img.getAttribute('src');

    // Create an anchor element for downloading
    let anchor = document.createElement("a");
    anchor.href = imgSrc;
    anchor.download = "QR_Code.png";

    // Trigger a click event on the anchor to initiate the download
    anchor.click();
  } else {
    alert("QR Code not generated yet.");
  }
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInput();
});

function isEmptyInput() {
  if (qrText.value.length > 0) {
    generateQRCode();
  } else {
    alert("Enter the text or URL to generate a QR Code");
  }
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
