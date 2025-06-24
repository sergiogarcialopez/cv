function leftDrawerResize() {
    let h_rect = document.getElementById("encabezado").getBoundingClientRect();
    let h_rect_str = {
        top: h_rect.top,
        right: h_rect.right,
        bottom: h_rect.bottom,
        left: h_rect.left,
        width: h_rect.width,
        height: h_rect.height,
        x: h_rect.x,
        y: h_rect.y,
    };
    // alert(JSON.stringify(h_rect_str));
    
    let leftDrawer = document.getElementById("left-drawer");
    leftDrawer.style.marginTop = h_rect.height + "px";
}
window.onresize = leftDrawerResize;