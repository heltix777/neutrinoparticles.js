import fs from 'fs'
import {PIXI, Canvas} from './node-pixi-patched'
import path from 'path'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import expect from 'expect';
import vm from 'vm';
import assert from 'assert';

function includeFile(path) {
    vm.runInThisContext(fs.readFileSync(path))
}

includeFile('dist/neutrinoparticles.js');
includeFile('dist-PIXI/neutrinoparticles.pixi.js');

expect.extend({toMatchImageSnapshot});

describe ('index', function () {

    it ('should test PIXI', (cb) => {

        const app = new PIXI.Application({backgroundColor: 0x404040, forceCanvas: false});

        PIXI.loader.add('che', __dirname + path.sep + 'test.png');

        let has_error = false;
        PIXI.loader.onComplete.add(() => {

            var neutrinoContext = new PIXINeutrinoContext(app.renderer);
            neutrinoContext.effectsBasePath = __dirname + "/export_js/";
            neutrinoContext.texturesBasePath = __dirname + "/textures/";

            function effectsLoader(p, resultCb) {
                let effectSource = fs.readFileSync(p, 'utf-8');
                let EffectModel = vm.runInThisContext("(function() {" + effectSource + "; return NeutrinoEffect; })()");
                resultCb(new EffectModel(neutrinoContext.neutrino));
            }

            var noiseGenerator = new neutrinoContext.neutrino.NoiseGenerator();
            while (!noiseGenerator.step()) { // approx. 5,000 steps
                // you can use 'noiseGenerator.progress' to get generating progress from 0.0 to 1.0
            }

            var stage = new PIXI.Container();

            var testModel = new PIXINeutrinoEffectModel(neutrinoContext, "water_stream.js", effectsLoader);
            var testEffect = new PIXINeutrinoEffect(testModel, [0, 0, 0], 0);
            stage.addChild(testEffect);

            assert.equal(testEffect.ready(), true);

            testEffect.update(10);
            
            app.renderer.render(stage);
            
            let image = app.view.toCanvas().toBuffer();

            // This will write result to the file
            fs.writeFileSync(__dirname + path.sep + 'result.png', image);

            //expect(image).toMatchImageSnapshot({failureThreshold: 0});
        });

        PIXI.loader.onError.add((err) => {
            has_error = true;
            cb(err);
        });

        PIXI.loader.load();
    });
});