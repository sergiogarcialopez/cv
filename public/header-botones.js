var leftDrawer = false;
function openLeftDrawer() {
    // leftDrawerResize();
    let h_rect = document.getElementById("encabezado").getBoundingClientRect();
    document.getElementById("left-drawer")
        .style.marginTop = h_rect.height + "px";


    let icon = document.getElementById('icon-header-button-open-left-drawer');
    let div = document.getElementById('left-drawer');
    
    if (leftDrawer) {
        let divClose = div.animate([
            { transform: "translateX(0%)"},
            { transform: "translateX(-100%)"}
        ], {
            duration: 500,
            iteration: Infinity
        });
        divClose.onfinish = function() {
            div.style.visibility = "collapse";
        };
        icon.animate([
            { transform: "rotate(90deg)"},
            { transform: "rotate(0deg)"}
        ], {
            duration: 250,
            iteration: 1
        });
        icon.style.transform = "rotate(0deg)";
    } else {
        div.style.visibility = "visible";
        div.animate([
            { transform: "translateX(-50%)"},
            { transform: "translateX(0%)"}
        ], {
            duration: 250,
            iteration: Infinity
        });
        icon.animate([
            { transform: "rotate(0deg)"},
            { transform: "rotate(90deg)"}
        ], {
            duration: 250,
            iteration: 1
        });
        icon.style.transform = "rotate(90deg)";
    }
    leftDrawer = !leftDrawer;
}
function goHome() {
    
}