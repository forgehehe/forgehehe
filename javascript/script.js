onload = async () => {
    await animateBannerText();
}

async function animateBannerText() {
    let bannerText = "Howdy 👋";
    let bannerTextElement = document.getElementById("banner-text");
    for (let index = 0; index < 900; index++) {
        bannerTextElement.innerText = "";
        bannerTextElement.style.backgroundColor = "";
        for (const char of bannerText) {
            bannerTextElement.innerHTML += char;
            await new Promise(resolve => setTimeout(resolve, 150));
        }
        await new Promise(resolve => setTimeout(resolve, 5000));
        bannerTextElement.style.backgroundColor = "#0078d7";
        await new Promise(resolve => setTimeout(resolve, 500));
    }    
}