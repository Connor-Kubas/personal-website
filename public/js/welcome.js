const introduction = document.getElementById('introduction');

// fadeIn(introduction);
// slideIn(introduction);

async function fadeIn(element)
{
    for (let i = 0; i < 100; i++) {
        element.style.opacity = (i / 100);
        await sleep(1);
    }
}

async function slideIn(element)
{
    var position = element.getBoundingClientRect().top;

    element.style.position = 'absolute';
    
    for (let i = position + 150; i > position; i -= 3) {
        element.style.top = i + 'px';
        await sleep(1);
    }
    element.style.position = 'static';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function openContact() {
    document.getElementById('contact').style.display = "flex";
    document.getElementById('introduction').style.filter = 'blur(10px)';
    document.getElementById('footer').style.filter = 'blur(10px)';
    // document.getElementById('contact').style.filter = 'blur(0px)';
}

function closeContact() {
    document.getElementById('contact').style.display = "none";
    document.getElementById('introduction').style.filter = 'blur(0px)';
    document.getElementById('footer').style.filter = 'blur(0px)';
}