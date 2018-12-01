import fs from 'fs'
import {PIXI, Canvas} from './node-pixi-patched'
import path from 'path'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import expect from 'expect';

expect.extend({toMatchImageSnapshot});

describe ('index', function () {

    it ('should test PIXI', (cb) => {

        const app = new PIXI.Application({backgroundColor: 0x404040, forceCanvas: false});

        PIXI.loader.add('che', __dirname + path.sep + 'test.png');

        let has_error = false;
        PIXI.loader.onComplete.add(() => {

            let che = new PIXI.Sprite(PIXI.loader.resources.che.texture);

            // Add che to the scene we are building
            app.stage.addChild(che);

            app.render();

            let image = app.view.toCanvas().toBuffer();

            // This will write result to the file
            fs.writeFileSync(__dirname + path.sep + 'result.png', image);

            expect(image).toMatchImageSnapshot({failureThreshold: 0});
        });

        PIXI.loader.onError.add((err) => {
            has_error = true;
            cb(err);
        });

        PIXI.loader.load();
    });
});