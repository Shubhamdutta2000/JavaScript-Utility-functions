function showDialog(dialog, document) {
    if (dialog.style.display == "none") {
        if (typeof (document) == "undefined" || document == null) {
            document = window.document;
        }

        var overlayId = "$_dialog_overlay";
        var overlay = document.getElementById(overlayId);

        if (typeof (overlay) == "undefined" || overlay == null) {
            overlay = createElement(
                {
                    tagName: "iframe",
                    id: overlayId,
                    frameBorder: "0",
                    scrolling: "no",
                    allowTransparency: "true",
                    style: {
                        top: "0px",
                        left: "0px",
                        position: "absolute",
                        filter: "alpha(opacity=100); -moz-opacity:1.0",
                        zIndex: $getZIndex()
                    },
                    width: document.body.scrollWidth,
                    height: document.body.scrollHeight,
                    parent: document.body
                },
                document
            );
        }

        overlay.document.body.bgColor = "#dddddd";
        dialog.overlay = overlay;
        dialog.style.zIndex = $getZIndex();
        dialog.style.position = "absolute";
        dialog.style.top = ((document.documentElement.clientHeight - dialog.offsetHeight) / 2 + document.documentElement.scrollTop) + "px";
        dialog.style.left = ((document.documentElement.clientWidth - dialog.offsetWidth) / 2 + document.documentElement.scrollLeft) + "px";
        overlay.style.display = "";
        dialog.style.display = "";
    }
};