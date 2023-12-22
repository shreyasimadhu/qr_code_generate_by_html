function generateQRcode(){
    let IFT1 = document.getElementById('inputFieldtxt1').value;
    let IFT2 = document.getElementById('inputFieldtxt2').value;
    let IFT3 = document.getElementById('inputFieldtxt3').value;
    let IFT4 = document.getElementById('inputFieldtxt4').value;
    let IFT5 = document.getElementById('inputFieldtxt5').value;
    let IFT6 = document.getElementById('inputFieldtxt6').value;
    let IFT7 = document.getElementById('inputFieldtxt7').value;
    let IFT8 = document.getElementById('inputFieldtxt8').value;
    let IFT9 = document.getElementById('inputFieldtxt9').value;
    let IFT10 = document.getElementById('inputFieldtxt10').value;
    let IFT11 = document.getElementById('inputFieldtxt11').value;
    let IFT12 = document.getElementById('inputFieldtxt12').value;
    let qrDiv = document.getElementById('qrcode');
    let allContent = IFT1 + " " + IFT2 + "\n\n" + IFT3 + " " + IFT4 + "\n\n" + IFT5 + " " + IFT6 + "\n\n" + IFT7 + " " + IFT8 + "\n\n" + IFT9 + " " + IFT10 + "\n\n" + IFT11 + " " + IFT12;
    if(allContent){
        qrDiv.innerHTML = "";
        new QRCode(qrDiv,allContent);
        document.getElementById('qrcode-container').style.display = "block";
    }
    else{
        alert("Null");
    }
}