import fs from 'fs';
import gl from 'gl';
import * as canvas from 'canvas';
import EventEmitter from 'events';
import request from 'request';
import * as webgl from './webgl';

let NODE_PIXI_WEBGL = false;

class Element {

    constructor () {
        this.style = {};
        this.offsetWidth = 20;
        this.offsetHeight = 20;
        this._clientWidth = 20;
        this._clientHeight = 20;
    }

    addEventListener () {}

    appendChild () {}

    removeChild () {}

    get clientHeight () {
        return this._clientHeight;
    }

    set clientHeight (value) {
        this._clientHeight = value;
    }

    get clientWidth () {
        return this._clientWidth;
    }

    set clientWidth (value) {
        this._clientWidth = value;
    }
}

class AnchorElement extends Element {

    constructor () {
        super();

        this._href = '';
    }

    get href () {
        return this._href;
    }
    set href (value) {
        this._href = value;
    }
}

export class Canvas extends Element {

    static imageToImageData (image, flip_y = false) {
        if (NODE_PIXI_WEBGL) {
            let c = canvas.createCanvas(image.width, image.height),
                ctx = c.getContext('2d');
            if (flip_y) {
                ctx.scale(1, -1);
                ctx.translate(0, -image.height);
            }
            ctx.drawImage(image, 0, 0);
            return ctx.getImageData(0, 0, image.width, image.height);
        } else {
            return image;
        }
    }

    constructor () {
        super();

        this._canvas = canvas.createCanvas(1, 1);

        //patching this stuff is necessary, see jsdom HTMLCanvasElement-impl
        this._ctx = this._canvas.getContext('2d');
        this._ctx.canvas = this._canvas;

        let patch = (ctx, name) => {
            const prev = ctx[name];
            ctx[name] = function (image) {
                arguments[0] = image instanceof Image ? image : image._canvas;
                return prev.apply(ctx, arguments);
            };
        };

        patch(this._ctx, 'createPattern');
        patch(this._ctx, 'drawImage');
        
        this._webgl = false;
        this._webglResizeExt = null;
    }

    getContext (value, contextOptions) {
        if (value === 'webgl') {
            this._ctx = gl(1, 1, contextOptions);
            global.window.WebGLRenderingContext = this._ctx;
            this._webgl = true;
            this._webglResizeExt =
                this._ctx.getExtension('STACKGL_resize_drawingbuffer');
            NODE_PIXI_WEBGL = true;
        }
        return this._ctx;
    }

    get height () {
        return this._canvas.height;
    }
    set height (value) {
        if (this._webglResizeExt) {
            this._webglResizeExt.resize(this.width, value);
        }
        this._canvas.height = value;
    }

    get width () {
        return this._canvas.width;
    }
    set width (value) {
        if (this._webglResizeExt) {
            this._webglResizeExt.resize(value, this.height);
        }
        this._canvas.width = value;
    }

    toCanvas(format = 'png', quality = 1) {
        let c = this._webgl ?
            webgl.to_canvas(this._ctx, this.width, this.height) :
            this._canvas;

        return c;
    }
}

// monkey patch Canvas#Image
canvas.Image.prototype._eventemitter = null;
canvas.Image.prototype.addEventListener = function (name, cb) {
    if (!this._eventemitter) {
        this._eventemitter = new EventEmitter;
    }
    this._eventemitter.once(name, cb);
}

class Document {

    constructor () {
        this.body = new Element;
        this.documentElement = this.body;
    }

    addEventListener () {}
    appendChild (child) {}
    removeChild (child) {}

    createElement (tag) {
        switch (tag) {
            case 'canvas':
                return new Canvas();
            case 'div':
                return new Element();
            case 'a':
                return new AnchorElement();
            default:
                throw new Error(`Document::createElement: unhandled "${tag}"`);
        }
    }
}

class Window {

    constructor (document) {
        this.document = document;
        this.navigator = {
            userAgent: 'node-pixi',
            appVersion: '0.3.3'
        };
        this.location = "http://localhost/";
        this.Image = canvas.Image;
        this.WebGLRenderingContext = {};
    }

    addEventListener () {}
}

global.document = new Document;
global.window = new Window(global.document);
global.navigator = global.window.navigator;
global.Image = canvas.Image;
global.Canvas = Canvas;
