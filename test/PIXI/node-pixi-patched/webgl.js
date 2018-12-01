import {createCanvas, createImageData} from 'canvas';

export function to_canvas (gl, width, height) {
    let pixels = new ArrayBuffer(width * height * 4),
        canvas = createCanvas(width, height),
        ctx = canvas.getContext('2d');

    for (let y = 0; y < height; ++y) {
        gl.readPixels(0, height - y - 1, width, 1, gl.RGBA, gl.UNSIGNED_BYTE, 
            new Uint8Array(pixels, width * y * 4, width * 4));
    }

    let data = createImageData(new Uint8ClampedArray(pixels), width, height);

    ctx.putImageData(data, 0, 0);

    return canvas;
}

export function to_png (gl, width, height) {
    return to_canvas(gl, width, height).toBuffer();
}
