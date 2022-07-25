if (RegExp('Mainpage').test(window.location.search)) {

introJs().setOptions({
    steps:[
      {
        title: "Hi",
        intro:"Welcome to Mavenberg!"
    },
      {
        element: document.querySelector(".About"),
        intro:"About the company",
        position: "bottom"
    },
    {
        element: document.querySelector(".Project"),
        intro:"Projects we have worked on",
        position: "bottom-middle-aligned"
    },
    {
        element: document.querySelector(".Contac"),
        intro:"How to contact us",
        position: "bottom-right-aligned",
        // onclick: location.href="contact.html"
    },
    // {
    //     element: document.querySelector(".Next-Page")
    // }
    ],
    tooltipClass: 'customTooltip',
    showProgress: true,
    showBullets: false,
    disableInteraction: true,
    nextLabel: "=>",
    prevLabel: "<=",
    doneLabel: "Next Page",
    hidePrev: true,
    // nextToDone: false,
    exitOnOverlayClick: false,
    // dontShowAgain: true,
    autoPosition: false,
    exitOnEsc: false
    // showStepNumbers: true
}).oncomplete(() => {
  window.location.assign('contact.html?tooltip');
  }).start();

}

// introJs().onexit(() => {
//   window.location.replace('Mav.html');
// })

function starttourfunc()
{
window.location.assign('Mav.html?Mainpage');
// $(this).hide();
}

document.getElementById("Tour").addEventListener("click",starttourfunc);
