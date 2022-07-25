// introJs().addHints();
if (RegExp('tooltip2').test(window.location.search)) {
introJs().setOptions(
    {
            steps:[
                {
                    title: "Projects",
                    intro:"Here you can find details about the projects we have worked on!"
                },
            ],
            doneLabel: "Done",
            tooltipClass: "TT3",
            showProgress: false,
            showBullets: false,
            disableInteraction: true,
            exitOnOverlayClick: false
        }).oncomplete(() => {
            window.location.replace('projects.html');
        }).start();

    }

    
    introJs().addHints();