var L08_Canvas_Assets;
(function (L08_Canvas_Assets) {
    window.addEventListener("load", handleLoad);
    var crc2;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        var gradient = crc2.createLinearGradient(100, 1, 100, 100);
        gradient.addColorStop(0, "salmon");
        gradient.addColorStop(.5, "red");
        gradient.addColorStop(1, "gold");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 400, 200);
    }
})(L08_Canvas_Assets || (L08_Canvas_Assets = {}));
