const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const qrContainer = document.querySelector(".qr-body");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInput();
});

function isEmptyInput() {
  (qrText.value.length > 0) ? generateQRCode() : alert("Enter the text or URL to generate QR Code");
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

// Function to check if the device is a mobile device
function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

// Remove the download button if it's a mobile device
const downloadBtn = document.getElementById("downloadBtn");
if (isMobileDevice()) {
  downloadBtn.style.display = 'none';
}

// Remove the "large" option from the dropdown if it's a mobile device
if (isMobileDevice()) {
  const largeOption = sizes.querySelector("option[value='300']");
  if (largeOption) {
    sizes.removeChild(largeOption);
  }
}
