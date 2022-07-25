
if (RegExp('tooltip').test(window.location.search)) {
    // function starttourfunc2()
    // {
introJs().setOptions(
    {
            steps:[
                {
                    title: "Contact",
                    intro:"Here you can find contact information"
                },
            ],
            doneLabel: "Next Page",
            tooltipClass: "TT2",
            showProgress: false,
            showBullets: false,
            disableInteraction: true,
            exitOnOverlayClick: false
        }).oncomplete(() => {
            window.location.assign('projects.html?tooltip2');
        }).start();

    // }
}
    // window.starttourfunc2();

    // document.getElementById("Tour").addEventListener("click",starttourfunc2);