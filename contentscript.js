var element = ''

function find(){
setTimeout(function() {
    for (const a of document.querySelectorAll("yt-formatted-string")) {
        if (a.textContent=="Dislike") {
            element = a
            break;
        }
    }
}, 1000)
}

find()
async function start() {

    setTimeout(function() {
        element.innerText = 'Loading'
    }, 1000)

    videoId = new URL(location).searchParams.get('v')

    await fetch('https://floating-citadel-65780.herokuapp.com/?video=' + videoId).then((k) => k.json()).then((k) => {
        console.log(k)
        element.innerText = k.count

    })

}

let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        element.innerText='Dislike';find();start();
    }
}).observe(document, { subtree: true, childList: true });

start()
