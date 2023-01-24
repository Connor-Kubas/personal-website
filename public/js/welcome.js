const introduction = document.getElementById('introduction');

const block = document.getElementById('github');
const blockWidth = block.offsetWidth;
var blockWidthExpanded = 0;

const banner = document.getElementById('banner');
const bannerWidth = banner.offsetWidth;

// fadeIn(introduction);
// slideIn(introduction);

block.addEventListener("mouseover", (event) => {
    expand(block);
});

block.addEventListener("mouseleave", (event) => {
    // shrink(block);
});

async function expand(element) {
    // Try to make so that when you hover over an icon the container div gets bigger
    // document.getElementById('banner').position.width += '5%';
    // const width = element.offsetWidth;
    // const widthExpanded = width + 300;
    // if (element.offsetWidth <= width) {
    //     for (let i = 0; i <= widthExpanded; i+= 10) {
    //         element.style.width = width + i + "px";
    //         await sleep(1);
    //     }
    // } 
    banner.style.width = (bannerWidth + 100) + 'px';
    // if (element.offsetWidth == blockWidth) {
        console.log('yup');
        for (let i = 0; i < 200; i += 10) {
            element.style.width = (blockWidth + i) + 'px';
            await sleep(1);
        }
    // }
    blockWidthExpanded = element.offsetWidth;
}

async function shrink(element) {
    console.log(blockWidth + ' ' + blockWidthExpanded);
    for (let i = blockWidthExpanded; i > blockWidth; i-= 10) {
        console.log(i);
        element.style.width = (blockWidth + i) + "px";
        await sleep(1);
    }
    element.style.width = blockWidth;
}

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