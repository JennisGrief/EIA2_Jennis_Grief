namespace L08_Canvas_Assets {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;



    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let gradient: CanvasGradient = crc2.createLinearGradient(100, 1, 100, 100);

        gradient.addColorStop(0, "salmon");
        gradient.addColorStop(.5, "red");
        gradient.addColorStop(1, "gold");
        
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 400, 200);






    
    
    
        






        
    
    }  
}



