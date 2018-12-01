1. The PIXI was patched: replaced "sample" variable from fragment shaders with "sampl" to prevent compilation error on some configurations.
2. The PIXI was patched: 

the string:
this.data.addEventListener('load', this._boundComplete, false);

replaced with:
if (!this.data.complete)
    this.data.addEventListener('load', this._boundComplete, false);
else
    this._boundComplete();
