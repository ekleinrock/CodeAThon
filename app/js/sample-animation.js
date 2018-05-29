(function(lib, img, cjs, ss, an) {

  var p; // shortcut to reference prototypes
  lib.webFontTxtInst = {};
  var loadedTypekitCount = 0;
  var loadedGoogleCount = 0;
  var gFontsUpdateCacheList = [];
  var tFontsUpdateCacheList = [];
  lib.ssMetadata = [];



  lib.updateListCache = function(cacheList) {
    for (var i = 0; i < cacheList.length; i++) {
      if (cacheList[i].cacheCanvas)
        cacheList[i].updateCache();
    }
  };

  lib.addElementsToCache = function(textInst, cacheList) {
    var cur = textInst;
    while (cur != null && cur != exportRoot) {
      if (cacheList.indexOf(cur) != -1)
        break;
      cur = cur.parent;
    }
    if (cur != exportRoot) {
      var cur2 = textInst;
      var index = cacheList.indexOf(cur);
      while (cur2 != null && cur2 != cur) {
        cacheList.splice(index, 0, cur2);
        cur2 = cur2.parent;
        index++;
      }
    } else {
      cur = textInst;
      while (cur != null && cur != exportRoot) {
        cacheList.push(cur);
        cur = cur.parent;
      }
    }
  };

  lib.gfontAvailable = function(family, totalGoogleCount) {
    lib.properties.webfonts[family] = true;
    var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
    for (var f = 0; f < txtInst.length; ++f)
      lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

    loadedGoogleCount++;
    if (loadedGoogleCount == totalGoogleCount) {
      lib.updateListCache(gFontsUpdateCacheList);
    }
  };

  lib.tfontAvailable = function(family, totalTypekitCount) {
    lib.properties.webfonts[family] = true;
    var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
    for (var f = 0; f < txtInst.length; ++f)
      lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

    loadedTypekitCount++;
    if (loadedTypekitCount == totalTypekitCount) {
      lib.updateListCache(tFontsUpdateCacheList);
    }
  };
  // symbols:
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }


  (lib.txtComma = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#3A5A78").s().p("AgdAhQAQgEAJgIQAGgJgBgNIgSAAIAAgxIAvAAIAAAqQAAAcgOAOQgOAPgaACg");
    this.shape.setTransform(6.2, 36.7);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 15.9, 47.2);


  (lib.txtAuto = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#3A5A78").s().p("AgcBDQgNgGgKgKQgJgKgFgNQgFgNgBgPIAAAAQABgNAFgOQAFgNAJgJQAKgLANgFQANgHAPAAQAQAAANAHQAOAFAJAKQAJAKAGANQAEANAAAOIAAAAQAAAOgEANQgGANgJALQgKAKgNAGQgNAFgQAAQgPAAgNgFgAgcgxQgMAIgHANQgHANAAAPIAAAAQAAAQAHANQAHANAMAIQANAIAPAAQAQAAAMgIQANgHAHgNQAHgNAAgRIAAAAQAAgPgHgNQgHgNgNgIQgMgHgQgBQgQABgMAHg");
    this.shape.setTransform(59.1, 14.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#3A5A78").s().p("AgHBGIAAh9IgvAAIAAgOIBtAAIAAAOIgvAAIAAB9g");
    this.shape_1.setTransform(43.1, 14.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#3A5A78").s().p("AgdBAQgOgGgHgOQgHgOAAgTIAAhRIAQAAIAABPQAAAXALAMQALANATAAQAUAAALgMQALgMABgWIAAhRIAPAAIAABPQAAAUgHAOQgHAOgNAHQgNAHgSAAQgQAAgNgHg");
    this.shape_2.setTransform(27, 14.3);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#3A5A78").s().p("AA2BHIgQgmIhMAAIgQAmIgQAAIBAiMIANAAIBACMgAAfATIgfhGIgfBGIA+AAg");
    this.shape_3.setTransform(10, 14.2);

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_3
      }, {
        t: this.shape_2
      }, {
        t: this.shape_1
      }, {
        t: this.shape
      }]
    }).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 71.7, 28);


  (lib.txtMonthly = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#3A5A78").s().p("AgVA6IgKgBIgJgDIAFgLIAGADIAHAAQAGABAEgEQAFgEADgJIgnhXIAOAAIAfBJIAchJIAOAAIglBaQgFAOgGAFQgHAGgJAAIgBAAg");
    this.shape.setTransform(65, 15.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#3A5A78").s().p("AgGA+IAAh7IANAAIAAB7g");
    this.shape_1.setTransform(57.8, 12.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#3A5A78").s().p("AAaA+IAAg0QgBgLgGgHQgHgHgLAAQgHAAgFAEQgHADgDAGQgDAGgBAHIAAAzIgMAAIAAh7IAMAAIAAA0QAFgIAHgFQAIgEAKgBQAKAAAIAEQAHAFAFAIQADAIAAAKIAAA2g");
    this.shape_2.setTransform(50.4, 12.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#3A5A78").s().p("AgBA3QgGgCgDgGQgDgFAAgIIAAg1IgNAAIAAgLIANAAIAAgbIANAAIAAAbIAaAAIAAALIgaAAIAAAzQAAAHADAEQAEAEAHgBIAGgBIAGgCIAAALIgHADIgJABQgGAAgFgDg");
    this.shape_3.setTransform(41.6, 12.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#3A5A78").s().p("AAaAtIAAgzQAAgMgHgHQgGgHgMAAQgGAAgHAEQgFADgEAGQgDAHAAAHIAAAyIgOAAIAAhXIAOAAIAAAQQAEgIAHgFQAIgEAKgBQALAAAHAEQAHAFAFAIQADAIAAALIAAA1g");
    this.shape_4.setTransform(33.1, 13.8);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#3A5A78").s().p("AgXAoQgKgHgGgJQgGgLAAgNIAAAAQAAgLAGgLQAGgKAKgGQALgHAMAAQAOAAAJAHQALAFAGALQAGAKAAAMQgBAMgFALQgGALgLAFQgKAHgNAAQgNAAgKgGgAgQgcQgHAEgEAHQgFAJAAAIQABAJAEAJQAEAHAIAEQAHAGAIAAQAKAAAHgGQAHgEAFgHQADgIAAgKIAAAAQABgIgFgIQgEgIgHgEQgIgFgJgBQgJABgHAFg");
    this.shape_5.setTransform(22.3, 13.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#3A5A78").s().p("AAsA7IAAhfIgsA/IAAAAIgrg+IAABeIgNAAIAAh2IAOAAIAqBAIArhAIAOAAIAAB2g");
    this.shape_6.setTransform(9.4, 12.4);

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_6
      }, {
        t: this.shape_5
      }, {
        t: this.shape_4
      }, {
        t: this.shape_3
      }, {
        t: this.shape_2
      }, {
        t: this.shape_1
      }, {
        t: this.shape
      }]
    }).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 72.2, 24.4);


  (lib.txtdollarsign = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#3A5A78").s().p("AgHBvIAAgaQgRgCgQgGQgPgHgOgLIARgXQALAJALAFQALAGANACIAAgzQgTgFgMgGQgNgGgGgKQgGgLAAgOIAAgBQAAgOAHgKQAHgLAMgGQANgHAQgBIAAgPIAVAAIAAAPQAOACAMAFQAMAFALAIIgOAYQgJgGgJgEQgJgEgJgCIAAAxQAeAIANALQAOANAAAVIAAAAQAAAPgHAKQgHALgNAHQgMAGgRACIAAAZgAANA7QANgBAHgGQAGgFAAgKIAAAAQAAgJgFgGQgGgFgPgFgAgZg+QgGAGAAAJQAAAFACAFQACAEAGADQAFAEAKADIAAguQgNABgGAGg");
    this.shape.setTransform(10.2, 18.4);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 20.9, 35.2);


  (lib.txtAnnual = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#3A5A78").s().p("AgGA+IAAh7IANAAIAAB7g");
    this.shape.setTransform(58.9, 12.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#3A5A78").s().p("AgUAqQgIgDgFgGQgEgGAAgJIAAgBQAAgIAEgHQAFgFAJgDQAIgEALAAIAOABIAMADIAAgDQAAgMgHgGQgHgGgMAAQgHAAgGACIgNAEIgDgLIAOgEQAIgCAIgBQAJAAAHADQAIACAEAFQAFAFACAGQACAHAAAIIAAA0IgMAAIAAgMQgFAFgHAFQgIAEgKABQgJgBgHgDgAgSAEQgGAFAAAIIAAAAQAAAGADAEQADAEAFACQAFACAGAAQAHAAAGgDQAHgDAEgGQAEgEAAgIIAAgIIgLgDIgPAAQgLAAgHAEg");
    this.shape_1.setTransform(51.5, 14);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#3A5A78").s().p("AgWApQgHgFgEgIQgEgIAAgLIAAg1IANAAIAAAzQAAAMAGAHQAGAHAMAAQAHAAAFgEQAGgDAEgGQADgGAAgIIAAgyIANAAIAABXIgNAAIAAgPQgEAHgHAFQgIAFgKAAQgKAAgIgEg");
    this.shape_2.setTransform(41.5, 14);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#3A5A78").s().p("AAaAtIAAgzQgBgMgGgHQgHgHgLAAQgHAAgFAEQgHADgDAGQgDAHgBAHIAAAyIgMAAIAAhXIAMAAIAAAQQAFgIAIgFQAGgEALgBQALAAAHAEQAIAFADAIQAEAIAAALIAAA1g");
    this.shape_3.setTransform(31.2, 13.8);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#3A5A78").s().p("AAaAtIAAgzQgBgMgGgHQgGgHgMAAQgHAAgFAEQgHADgDAGQgDAHgBAHIAAAyIgMAAIAAhXIAMAAIAAAQQAFgIAIgFQAGgEALgBQALAAAHAEQAIAFAEAIQADAIAAALIAAA1g");
    this.shape_4.setTransform(20.8, 13.8);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#3A5A78").s().p("AAuA8IgNggIhAAAIgPAgIgOAAIA3h3IAMAAIA2B3gAAbAQIgbg8IgaA8IA1AAg");
    this.shape_5.setTransform(8.7, 12.3);

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_5
      }, {
        t: this.shape_4
      }, {
        t: this.shape_3
      }, {
        t: this.shape_2
      }, {
        t: this.shape_1
      }, {
        t: this.shape
      }]
    }).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 63.3, 24.4);


  (lib.txt215 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#3A5A78").s().p("Ag0B2QgXgLgRgRIAcggQAPAOAPAIQAQAIASAAQAWAAAOgMQANgMAAgUIAAAAQAAgUgOgLQgOgLgXAAQgNAAgMADQgMADgKAFIgagRIAHh7ICWAAIAAAnIhwAAIgEA7QAJgDAJgCQAKgCALAAQAZAAAUAJQATAIAMASQAMAQAAAbIAAABQAAAagMATQgMATgVAKQgUALgcAAQgcAAgYgKg");
    this.shape.setTransform(58.8, 24.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#3A5A78").s().p("AAFB/IAAjQIgsANIgJgkIBDgWIAeAAIAAD9g");
    this.shape_1.setTransform(34.4, 23.9);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#3A5A78").s().p("AhaCAIAAgjIBXhKQAQgPALgJQAKgLAFgLQAEgKAAgLQAAgSgLgLQgMgKgRAAQgRAAgNAKQgNAJgPATIgfgZQALgRANgLQANgNARgFQAQgHAWAAQAZABASAIQATAKAKARQAKARAAAXIAAAAQABAUgIAPQgGAPgPAOQgPAPgWASIgzArIB3AAIAAAng");
    this.shape_2.setTransform(12.9, 23.8);

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_2
      }, {
        t: this.shape_1
      }, {
        t: this.shape
      }]
    }).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 77.5, 47.2);


  (lib.txt2850 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#3A5A78").s().p("Ag5BxQgZgSgNgcQgOgeAAgkIAAgBQAAgkAOgdQAOgdAZgSQAYgRAhgBQAhABAYARQAZASANAcQAOAdAAAlIAAAAQAAAlgOAdQgOAdgYARQgZASghAAQghAAgYgRgAghhNQgOAMgIATQgIAVAAAZIAAAAQAAAZAIAVQAIAUAOAMQAPAMATABQATgBAOgMQAPgMAHgUQAIgUAAgZIAAgBQAAgYgIgUQgIgVgOgMQgPgMgTAAQgTAAgOAMg");
    this.shape.setTransform(97.9, 24);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#3A5A78").s().p("AgzB2QgYgLgRgRIAbggQAPAOARAIQAQAIARAAQAWAAAOgMQANgMAAgUIAAAAQAAgUgPgLQgNgLgXAAQgOAAgMADQgLADgKAFIgagRIAHh7ICWAAIAAAnIhwAAIgEA7QAJgDAKgCQAIgCAMAAQAZAAAUAJQATAIAMASQALAQABAbIAAABQAAAagMATQgLATgWAKQgVALgbAAQgdAAgWgKg");
    this.shape_1.setTransform(73.5, 24.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#3A5A78").s().p("AgwB5QgWgJgMgQQgNgRAAgVIAAgBQAAgXAMgPQAMgPAVgIQgQgIgKgNQgKgOAAgVIAAAAQAAgUALgPQALgQAUgIQAUgJAYgBQAaABATAIQAUAJALAQQALAPABAUIAAAAQgBAVgKAOQgKANgQAIQAVAJAMAOQAMAPAAAWIAAABQAAAWgMARQgNAQgVAJQgWAJgcAAQgbAAgVgJgAgaAVQgMAFgGAIQgHAJAAALIAAABQAAAKAGAJQAGAIAMAGQALAFAQAAQAZAAAOgLQAOgLAAgQIAAgBQAAgLgHgJQgHgIgMgFQgMgFgPAAQgOAAgMAFgAgghRQgMAKAAAPIAAAAQAAARANAKQAMALATAAQAUgBAMgKQANgKAAgQIAAgBQAAgPgMgKQgMgKgVAAQgTAAgNAKg");
    this.shape_2.setTransform(49.1, 23.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#3A5A78").s().p("AgdAhQAQgEAIgIQAHgJgBgNIgRAAIAAgxIAuAAIAAAqQAAAcgOAOQgOAPgaACg");
    this.shape_3.setTransform(30.3, 36.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#3A5A78").s().p("AhaCAIAAgjIBXhKQAQgPALgJQAKgLAFgLQAEgKAAgLQAAgSgLgLQgMgKgRAAQgRAAgNAKQgNAJgPATIgfgZQALgRANgLQANgNARgFQAQgHAWAAQAZABASAIQATAKAKARQAKARAAAXIAAAAQABAUgIAPQgGAPgPAOQgPAPgWASIgzArIB3AAIAAAng");
    this.shape_4.setTransform(12.9, 23.8);

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_4
      }, {
        t: this.shape_3
      }, {
        t: this.shape_2
      }, {
        t: this.shape_1
      }, {
        t: this.shape
      }]
    }).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 113.2, 47.2);


  (lib.iconellipsegreen = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#006600").ss(2, 1, 1).p("AGBAAQAACghxBwQhwBxigAAQifAAhxhxQhwhwAAigQAAifBwhxQBxhwCfAAQCgAABwBwQBxBxAACfg");
    this.shape.setTransform(0, 0, 0.649, 0.649);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#006633").s().p("AkPEQQhxhwAAigQAAifBxhxQBxhwCeAAQCfAABxBwQBxBxAACfQAACghxBwQhxBxifAAQieAAhxhxg");
    this.shape_1.setTransform(0, 0, 0.649, 0.649);

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_1
      }, {
        t: this.shape
      }]
    }).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-26, -26, 52, 52);


  (lib.iconcheckmark = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#FFFFFF").ss(4, 1, 1).p("AjQANICECmIEdlk");

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-22.9, -19.8, 45.8, 39.7);


  (lib.grcEllipseGrey = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#CCCCCC").ss(4, 1, 1).p("AQaAAQAAGzk0EzQkzE0mzAAQmyAAk0k0QhWhVg9heQigj5AAk6QAAk5Cgj5QA9hfBWhVQE0kzGyAAQGzAAEzEzQE0E0AAGyg");
    this.shape.setTransform(105, 105);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-2, -2, 214, 214);


  (lib.grcDigitBox = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#CCCCCC").s().p("AhZCLIAAkVICzAAIAAEVg");
    this.shape.setTransform(9, 13.9);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  }).prototype = getMCSymbolPrototype(lib.grcDigitBox, new cjs.Rectangle(0, 0, 18, 27.8), null);


  (lib.grcCar = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#3A5A78").ss(2, 1, 1).p("AE4AAIpvAA");
    this.shape.setTransform(33.3, 47.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#3A5A78").ss(2, 1, 1).p("AglAAIBLAA");
    this.shape_1.setTransform(33.3, 4.8);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#3A5A78").ss(2, 1, 1).p("AAuAAQAAATgOANQgNAOgTAAQgSAAgNgOQgOgNAAgTQAAgSAOgNQANgOASAAQATAAANAOQAOANAAASg");
    this.shape_2.setTransform(51, 37.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#3A5A78").ss(2, 1, 1).p("AAuAAQAAATgOANQgNAOgTAAQgSAAgNgOQgOgNAAgTQAAgSAOgNQANgOASAAQATAAANAOQAOANAAASg");
    this.shape_3.setTransform(15.6, 37.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#3A5A78").ss(2, 1, 1).p("AhIAAICRAA");
    this.shape_4.setTransform(33.3, 40.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#3A5A78").ss(2, 1, 1).p("AhIAAICRAA");
    this.shape_5.setTransform(33.3, 35.5);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#3A5A78").ss(2, 1, 1).p("ADsA5QAAAZgYASQgXATgdAAIk/AAQgdAAgXgTQgYgSAAgZIAehwQAGgaAQgSQATgTAaAAIEVAAQAaAAATATQARARAFAbg");
    this.shape_6.setTransform(33.3, 11.9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s("#3A5A78").ss(2, 1, 1).p("AjrjCIhPAAQgIAAgFAFQgFAFAAAIIAAAVQAAAMANAEQABAAAbAFQgHAPgNB9IAACeQAAANAJAJQAJAJANAAIAvAAQANAAAJgJQAJgJAAgNIAAg/IGWAAIAAA/QAAANAJAJQAJAJANAAIAvAAQANAAAIgJQAKgJAAgNIAAieQgNh9gIgPQAbgFABAAQANgEAAgMIAAgVQAAgIgFgFQgFgFgHAAIhPAA");
    this.shape_7.setTransform(33.3, 37.2);

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_7
      }, {
        t: this.shape_6
      }, {
        t: this.shape_5
      }, {
        t: this.shape_4
      }, {
        t: this.shape_3
      }, {
        t: this.shape_2
      }, {
        t: this.shape_1
      }, {
        t: this.shape
      }]
    }).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 68.5, 58.6);


  (lib.ellipse = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#009053").ss(3, 1, 1).p("AJOAAQAAD1itCsQisCtj1AAQj0AAititQgwgwgig1QhaiLAAixQAAiwBaiLQAig2AwgwQCtisD0AAQD1AACsCsQCtCtAAD0g");
    this.shape.setTransform(59, 59);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.5, -1.5, 121, 121);


  (lib.Tween1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.grcDigitBox();
    this.instance.parent = this;
    this.instance.setTransform(221.5, 0, 1, 1, 0, 0, 0, 9, 13.9);

    this.instance_1 = new lib.grcDigitBox();
    this.instance_1.parent = this;
    this.instance_1.setTransform(197.2, 0, 1, 1, 0, 0, 0, 9, 13.9);

    this.instance_2 = new lib.grcDigitBox();
    this.instance_2.parent = this;
    this.instance_2.setTransform(172.2, 0, 1, 1, 0, 0, 0, 9, 13.9);

    this.instance_3 = new lib.grcDigitBox();
    this.instance_3.parent = this;
    this.instance_3.setTransform(137.2, 0, 1, 1, 0, 0, 0, 9, 13.9);

    this.instance_4 = new lib.grcDigitBox();
    this.instance_4.parent = this;
    this.instance_4.setTransform(-175.5, 0, 1, 1, 0, 0, 0, 9, 13.9);

    this.instance_5 = new lib.grcDigitBox();
    this.instance_5.parent = this;
    this.instance_5.setTransform(-198.5, 0, 1, 1, 0, 0, 0, 9, 13.9);

    this.instance_6 = new lib.grcDigitBox();
    this.instance_6.parent = this;
    this.instance_6.setTransform(-221.5, 0, 1, 1, 0, 0, 0, 9, 13.9);

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance_6
      }, {
        t: this.instance_5
      }, {
        t: this.instance_4
      }, {
        t: this.instance_3
      }, {
        t: this.instance_2
      }, {
        t: this.instance_1
      }, {
        t: this.instance
      }]
    }).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-230.5, -13.9, 461, 27.8);


  (lib.mcDigitBoxes = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.Tween1("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(230, 27, 1, 1, 0, 0, 0, -0.5, 13.1);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({
      regY: 13.9,
      scaleY: 0.04,
      y: 14.4
    }, 3).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 461, 27.8);


  (lib.mcEllipse = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_73 = function() {
      this.stop();

      /* Stop at This Frame
      The  timeline will stop/pause at the frame where you insert this code.
      Can also be used to stop/pause the timeline of movieclips.
      */
    }

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(1));

    // Annual
    this.instance = new lib.txtAnnual("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(128.4, 52.6, 1, 1, 0, 0, 0, 31.7, 12.2);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({
      startPosition: 0
    }, 0).wait(1));

    // Monthly
    this.instance_1 = new lib.txtMonthly("synched", 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(-250.9, 52.6, 1, 1, 0, 0, 0, 36.1, 12.2);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74));

    // $ signs
    this.instance_2 = new lib.txtdollarsign("synched", 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(73.3, -1.9, 1, 1, 0, 0, 0, 10.5, 17.6);

    this.instance_3 = new lib.txtdollarsign("synched", 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(-285.9, -1.9, 1, 1, 0, 0, 0, 10.5, 17.6);

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance_3
      }, {
        t: this.instance_2
      }]
    }).wait(74));

    // checkmark icon
    this.instance_4 = new lib.iconcheckmark("synched", 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(-76, -108, 0.005, 0.006);
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({
      _off: false
    }, 0).to({
      regX: -0.5,
      regY: -0.5,
      scaleX: 0.59,
      scaleY: 0.68,
      x: -75,
      y: -107
    }, 8).to({
      regX: -0.6,
      scaleX: 0.44,
      scaleY: 0.52
    }, 2).wait(4));

    // icon green ellipse
    this.instance_5 = new lib.iconellipsegreen("synched", 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(-76, -108.1, 0.103, 0.103);
    this.instance_5._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60).to({
      _off: false
    }, 0).to({
      regX: -0.1,
      regY: -0.1,
      scaleX: 1.06,
      scaleY: 1.06,
      x: -76.1,
      y: -108
    }, 8).to({
      regX: 0,
      regY: -0.2,
      scaleX: 0.83,
      scaleY: 0.82,
      x: -76,
      y: -108.1
    }, 2).wait(4));

    // txt 2,850
    this.instance_6 = new lib.txt2850("synched", 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(137.3, 1.1, 1, 1, 0, 0, 0, 53.6, 23.6);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(52).to({
      _off: false
    }, 0).to({
      alpha: 1
    }, 8).wait(14));

    // txt 215
    this.instance_7 = new lib.txt215("synched", 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(-243.5, 1.1, 1, 1, 0, 0, 0, 31.4, 23.6);
    this.instance_7.alpha = 0;
    this.instance_7._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(52).to({
      _off: false
    }, 0).to({
      alpha: 0.629
    }, 5).to({
      alpha: 1
    }, 3).wait(14));

    // comma
    this.instance_8 = new lib.txtComma("synched", 0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(115.8, 2.1, 1, 1, 0, 0, 0, 8, 23.6);

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(74));

    // digit boxes
    this.instance_9 = new lib.mcDigitBoxes();
    this.instance_9.parent = this;
    this.instance_9.setTransform(-40.4, 1.8, 1, 1, 0, 0, 0, 230.5, 13.9);
    this.instance_9._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({
      _off: false
    }, 0).to({
      alpha: 0
    }, 8).wait(22));

    // digit boxes
    this.instance_10 = new lib.grcDigitBox();
    this.instance_10.parent = this;
    this.instance_10.setTransform(181, 1.8, 1, 1, 0, 0, 0, 9, 13.9);

    this.instance_11 = new lib.grcDigitBox();
    this.instance_11.parent = this;
    this.instance_11.setTransform(156.7, 1.8, 1, 1, 0, 0, 0, 9, 13.9);

    this.instance_12 = new lib.grcDigitBox();
    this.instance_12.parent = this;
    this.instance_12.setTransform(131.7, 1.8, 1, 1, 0, 0, 0, 9, 13.9);

    this.instance_13 = new lib.grcDigitBox();
    this.instance_13.parent = this;
    this.instance_13.setTransform(96.7, 1.8, 1, 1, 0, 0, 0, 9, 13.9);

    this.instance_14 = new lib.grcDigitBox();
    this.instance_14.parent = this;
    this.instance_14.setTransform(-215.9, 1.8, 1, 1, 0, 0, 0, 9, 13.9);

    this.instance_15 = new lib.grcDigitBox();
    this.instance_15.parent = this;
    this.instance_15.setTransform(-238.9, 1.8, 1, 1, 0, 0, 0, 9, 13.9);

    this.instance_16 = new lib.grcDigitBox();
    this.instance_16.parent = this;
    this.instance_16.setTransform(-261.9, 1.8, 1, 1, 0, 0, 0, 9, 13.9);

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.instance_16
      }, {
        t: this.instance_15
      }, {
        t: this.instance_14
      }, {
        t: this.instance_13
      }, {
        t: this.instance_12
      }, {
        t: this.instance_11
      }, {
        t: this.instance_10
      }]
    }).to({
      state: [{
        t: this.instance_16
      }, {
        t: this.instance_15
      }, {
        t: this.instance_14
      }, {
        t: this.instance_13
      }, {
        t: this.instance_12
      }, {
        t: this.instance_11
      }, {
        t: this.instance_10
      }]
    }, 44).to({
      state: []
    }, 1).wait(29));

    // Auto
    this.instance_17 = new lib.txtAuto("synched", 0);
    this.instance_17.parent = this;
    this.instance_17.setTransform(-74.5, 50.8, 1, 1, 0, 0, 0, 35.9, 14);

    this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(74));

    // car
    this.instance_18 = new lib.grcCar("synched", 0);
    this.instance_18.parent = this;
    this.instance_18.setTransform(-74.9, -18, 1, 1, 0, 0, 0, 33.3, 28.3);

    this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(74));

    // new mask (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_38 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm+E8k9QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_39 = new cjs.Graphics().p("Ar7L8Qk8k8AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E8Qk8E8nAAAQm/AAk8k8g");
    var mask_graphics_40 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm+E8k9QE8k8G/AAQHAAAE8E8IAgAiQDVDmA2EnQARBjAABpQAAG/k8E9Qk8E8nAAAQm/AAk8k8g");
    var mask_graphics_41 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_42 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm+E8k9QE8k8G/AAQHAAAE8E8IAgAiQDVDmA2EnQARBjAABpQAAG/k8E9Qk8E8nAAAQm/AAk8k8g");
    var mask_graphics_43 = new cjs.Graphics().p("Ar7L7Qk8k8AAm/QAAm+E8k9QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAG/k8E8Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_44 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAG/k8E9Qk8E8nAAAQm/AAk8k8g");
    var mask_graphics_45 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm+E8k9QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_46 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_47 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm+E8k9QE8k8G/AAQHAAAE8E8IAgAiQDVDmA2EnQARBjAABpQAAG/k8E9Qk8E8nAAAQm/AAk8k8g");
    var mask_graphics_48 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_49 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm+E8k9QE8k8G/AAQHAAAE8E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_50 = new cjs.Graphics().p("Ar7L7Qk8k8AAm/QAAm+E8k9QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAG/k8E8Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_51 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAG/k8E9Qk8E8nAAAQm/AAk8k8g");
    var mask_graphics_52 = new cjs.Graphics().p("Ar7L8Qk8k8AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E8Qk8E8nAAAQm/AAk8k8g");
    var mask_graphics_53 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_54 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_55 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_56 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_57 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_58 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_59 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_60 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_61 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_62 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_63 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_64 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_65 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_66 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_67 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_68 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_69 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_70 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_71 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_72 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_graphics_73 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");

    this.timeline.addTween(cjs.Tween.get(mask).to({
      graphics: null,
      x: 0,
      y: 0
    }).wait(38).to({
      graphics: mask_graphics_38,
      x: 31,
      y: 108
    }).wait(1).to({
      graphics: mask_graphics_39,
      x: 31,
      y: 93.6
    }).wait(1).to({
      graphics: mask_graphics_40,
      x: 31,
      y: 79.1
    }).wait(1).to({
      graphics: mask_graphics_41,
      x: 31,
      y: 64.6
    }).wait(1).to({
      graphics: mask_graphics_42,
      x: 31,
      y: 50.2
    }).wait(1).to({
      graphics: mask_graphics_43,
      x: 31,
      y: 35.7
    }).wait(1).to({
      graphics: mask_graphics_44,
      x: 31,
      y: 21.2
    }).wait(1).to({
      graphics: mask_graphics_45,
      x: 31,
      y: 6.8
    }).wait(1).to({
      graphics: mask_graphics_46,
      x: 31,
      y: -7.7
    }).wait(1).to({
      graphics: mask_graphics_47,
      x: 31,
      y: -22.2
    }).wait(1).to({
      graphics: mask_graphics_48,
      x: 31,
      y: -36.6
    }).wait(1).to({
      graphics: mask_graphics_49,
      x: 31,
      y: -51.1
    }).wait(1).to({
      graphics: mask_graphics_50,
      x: 31,
      y: -65.6
    }).wait(1).to({
      graphics: mask_graphics_51,
      x: 31,
      y: -80
    }).wait(1).to({
      graphics: mask_graphics_52,
      x: 31,
      y: -94.5
    }).wait(1).to({
      graphics: mask_graphics_53,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_54,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_55,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_56,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_57,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_58,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_59,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_60,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_61,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_62,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_63,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_64,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_65,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_66,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_67,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_68,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_69,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_70,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_71,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_72,
      x: 31,
      y: -109
    }).wait(1).to({
      graphics: mask_graphics_73,
      x: 31,
      y: -109
    }).wait(1));

    // Layer 52
    this.instance_19 = new lib.ellipse("synched", 0);
    this.instance_19.parent = this;
    this.instance_19.setTransform(-75.8, -1.2, 1.78, 1.78, 0, 0, 0, 58.5, 58.5);
    this.instance_19._off = true;

    var maskedShapeInstanceList = [this.instance_19];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(38).to({
      _off: false
    }, 0).wait(36));

    // new mask (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_25 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm+E8k9QE8k8G/AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm/AAk8k9g");
    var mask_1_graphics_26 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm+E8k9QE9k8G+AAQHAAAE7E8IAhAiQDVDmA2EnQARBjAABpQAAG/k9E9Qk7E8nAAAQm+AAk9k8g");
    var mask_1_graphics_27 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm+E8k9QE9k8G+AAQHAAAE7E8IAiAiQDUDmA1EnQASBjAABpQAAG/k9E9Qk7E8nAAAQm+AAk9k8g");
    var mask_1_graphics_28 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm/E8k8QE8k8G/AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAG/k9E9Qk7E8nAAAQm/AAk8k8g");
    var mask_1_graphics_29 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE8E8IAhAiQDVDlA2EoQARBjAABpQAAHAk9E7Qk8E9m/AAQm+AAk9k9g");
    var mask_1_graphics_30 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE7E8IAiAiQDUDmA1EnQASBjAABpQAAHAk9E7Qk7E9nAAAQm/AAk8k9g");
    var mask_1_graphics_31 = new cjs.Graphics().p("Ar7L7Qk8k8AAm/QAAm+E8k9QE9k8G+AAQHAAAE7E8IAhAiQDVDlA2EoQARBjAABpQAAG/k9E8Qk7E9nAAAQm+AAk9k9g");
    var mask_1_graphics_32 = new cjs.Graphics().p("Ar7L8Qk8k8AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E8Qk9E8m/AAQm+AAk9k8g");
    var mask_1_graphics_33 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm+E8k9QE8k8G/AAQHAAAE7E8IAiAiQDUDmA1EnQASBjAABpQAAG/k9E9Qk7E8nAAAQm/AAk8k8g");
    var mask_1_graphics_34 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm+E8k9QE9k8G+AAQG/AAE8E8IAhAiQDVDmA2EnQARBjAABpQAAHAk9E7Qk8E9m/AAQm+AAk9k9g");
    var mask_1_graphics_35 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm+E8k9QE9k8G+AAQG/AAE9E8IAgAiQDVDlA2EoQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_36 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAhAiQDVDlA2EoQARBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_1_graphics_37 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm+E8k9QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAG/k8E9Qk9E8m/AAQm+AAk9k8g");
    var mask_1_graphics_38 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA2EoQARBjAABpQAAG/k8E9Qk8E8nAAAQm/AAk8k8g");
    var mask_1_graphics_39 = new cjs.Graphics().p("Ar7L8Qk8k8AAnAQAAm/E8k8QE9k8G+AAQG/AAE8E8IAhAiQDVDlA2EoQARBjAABpQAAHAk9E8Qk8E8m/AAQm+AAk9k8g");
    var mask_1_graphics_40 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_41 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_42 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_43 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_44 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_45 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_46 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_47 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_48 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_49 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_50 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_51 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_52 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_53 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_54 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_55 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_56 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_57 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_58 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_59 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_60 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_61 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_62 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_63 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_64 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_65 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_66 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_67 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_68 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_69 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_70 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_71 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_72 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_1_graphics_73 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");

    this.timeline.addTween(cjs.Tween.get(mask_1).to({
      graphics: null,
      x: 0,
      y: 0
    }).wait(25).to({
      graphics: mask_1_graphics_25,
      x: -182,
      y: 108
    }).wait(1).to({
      graphics: mask_1_graphics_26,
      x: -167.8,
      y: 107.9
    }).wait(1).to({
      graphics: mask_1_graphics_27,
      x: -153.7,
      y: 107.8
    }).wait(1).to({
      graphics: mask_1_graphics_28,
      x: -139.6,
      y: 107.6
    }).wait(1).to({
      graphics: mask_1_graphics_29,
      x: -125.4,
      y: 107.5
    }).wait(1).to({
      graphics: mask_1_graphics_30,
      x: -111.3,
      y: 107.4
    }).wait(1).to({
      graphics: mask_1_graphics_31,
      x: -97.2,
      y: 107.2
    }).wait(1).to({
      graphics: mask_1_graphics_32,
      x: -83,
      y: 107.1
    }).wait(1).to({
      graphics: mask_1_graphics_33,
      x: -68.9,
      y: 107
    }).wait(1).to({
      graphics: mask_1_graphics_34,
      x: -54.8,
      y: 106.8
    }).wait(1).to({
      graphics: mask_1_graphics_35,
      x: -40.6,
      y: 106.7
    }).wait(1).to({
      graphics: mask_1_graphics_36,
      x: -26.5,
      y: 106.6
    }).wait(1).to({
      graphics: mask_1_graphics_37,
      x: -12.4,
      y: 106.4
    }).wait(1).to({
      graphics: mask_1_graphics_38,
      x: 1.8,
      y: 106.3
    }).wait(1).to({
      graphics: mask_1_graphics_39,
      x: 15.9,
      y: 106.2
    }).wait(1).to({
      graphics: mask_1_graphics_40,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_41,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_42,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_43,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_44,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_45,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_46,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_47,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_48,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_49,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_50,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_51,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_52,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_53,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_54,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_55,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_56,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_57,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_58,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_59,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_60,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_61,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_62,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_63,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_64,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_65,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_66,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_67,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_68,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_69,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_70,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_71,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_72,
      x: 30,
      y: 106
    }).wait(1).to({
      graphics: mask_1_graphics_73,
      x: 30,
      y: 106
    }).wait(1));

    // Layer 54
    this.instance_20 = new lib.ellipse("synched", 0);
    this.instance_20.parent = this;
    this.instance_20.setTransform(-75.8, -1.2, 1.78, 1.78, 0, 0, 0, 58.5, 58.5);
    this.instance_20._off = true;

    var maskedShapeInstanceList = [this.instance_20];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(25).to({
      _off: false
    }, 0).wait(49));

    // new mask (mask)
    var mask_2 = new cjs.Shape();
    mask_2._off = true;
    var mask_2_graphics_12 = new cjs.Graphics().p("Ar7L8Qk8k8AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA1EoQASBjAABpQAAHAk8E8Qk8E8nAAAQm/AAk8k8g");
    var mask_2_graphics_13 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQHAAAE8E8IAgAiQDVDlA1EoQASBjAABpQAAHAk8E7Qk8E9nAAAQm/AAk8k9g");
    var mask_2_graphics_14 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAhAiQDVDmA2EnQARBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_2_graphics_15 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm+E8k9QE9k8G+AAQHAAAE7E8IAhAiQDVDmA2EnQARBjAABpQAAG/k9E9Qk7E8nAAAQm+AAk9k8g");
    var mask_2_graphics_16 = new cjs.Graphics().p("Ar7L7Qk8k8AAm/QAAm+E8k9QE9k8G+AAQHAAAE7E8IAhAiQDVDlA2EoQARBjAABpQAAG/k9E8Qk7E9nAAAQm+AAk9k9g");
    var mask_2_graphics_17 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm/E8k8QE8k8G/AAQG/AAE9E8IAhAiQDUDlA1EoQASBjAABpQAAG/k8E9Qk9E8m/AAQm/AAk8k8g");
    var mask_2_graphics_18 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm+E8k9QE8k8G/AAQG/AAE9E8IAhAiQDUDlA1EoQASBjAABpQAAHAk8E7Qk9E9m/AAQm/AAk8k9g");
    var mask_2_graphics_19 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE8k8G/AAQG/AAE9E8IAhAiQDUDlA1EoQASBjAABpQAAHAk8E7Qk9E9m/AAQm/AAk8k9g");
    var mask_2_graphics_20 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm+E8k9QE9k8G+AAQG/AAE8E8IAhAiQDVDmA2EnQARBjAABpQAAG/k9E9Qk8E8m/AAQm+AAk9k8g");
    var mask_2_graphics_21 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm+E8k9QE9k8G+AAQG/AAE8E8IAhAiQDVDmA2EnQARBjAABpQAAG/k9E9Qk8E8m/AAQm+AAk9k8g");
    var mask_2_graphics_22 = new cjs.Graphics().p("Ar7L8Qk8k8AAnAQAAm+E8k9QE9k8G+AAQG/AAE8E8IAhAiQDVDmA2EnQARBjAABpQAAHAk9E8Qk8E8m/AAQm+AAk9k8g");
    var mask_2_graphics_23 = new cjs.Graphics().p("Ar7L7Qk8k8AAm/QAAm+E8k9QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAG/k9E8Qk7E9nAAAQm+AAk9k9g");
    var mask_2_graphics_24 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm+E8k9QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_2_graphics_25 = new cjs.Graphics().p("Ar7L8Qk8k8AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E8Qk7E8nAAAQm+AAk9k8g");
    var mask_2_graphics_26 = new cjs.Graphics().p("Ar7L8Qk8k9AAm/QAAm+E8k9QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAG/k8E9Qk9E8m/AAQm+AAk9k8g");
    var mask_2_graphics_27 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_28 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_29 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_30 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_31 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_32 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_33 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_34 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_35 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_36 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_37 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_38 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_39 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_40 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_41 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_42 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_43 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_44 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_45 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_46 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_47 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_48 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_49 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_50 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_51 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_52 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_53 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_54 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_55 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_56 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_57 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_58 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_59 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_60 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_61 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_62 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_63 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_64 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_65 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_66 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_67 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_68 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_69 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_70 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_71 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_72 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");
    var mask_2_graphics_73 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQG/AAE9E8IAgAiQDVDmA2EnQARBjAABpQAAHAk8E7Qk9E9m/AAQm+AAk9k9g");

    this.timeline.addTween(cjs.Tween.get(mask_2).to({
      graphics: null,
      x: 0,
      y: 0
    }).wait(12).to({
      graphics: mask_2_graphics_12,
      x: -183.2,
      y: -109.4
    }).wait(1).to({
      graphics: mask_2_graphics_13,
      x: -183.2,
      y: -95
    }).wait(1).to({
      graphics: mask_2_graphics_14,
      x: -183.1,
      y: -80.7
    }).wait(1).to({
      graphics: mask_2_graphics_15,
      x: -183.1,
      y: -66.4
    }).wait(1).to({
      graphics: mask_2_graphics_16,
      x: -183.1,
      y: -52.1
    }).wait(1).to({
      graphics: mask_2_graphics_17,
      x: -183.1,
      y: -37.7
    }).wait(1).to({
      graphics: mask_2_graphics_18,
      x: -183.1,
      y: -23.4
    }).wait(1).to({
      graphics: mask_2_graphics_19,
      x: -183.1,
      y: -9.1
    }).wait(1).to({
      graphics: mask_2_graphics_20,
      x: -183,
      y: 5.3
    }).wait(1).to({
      graphics: mask_2_graphics_21,
      x: -183,
      y: 19.6
    }).wait(1).to({
      graphics: mask_2_graphics_22,
      x: -183,
      y: 33.9
    }).wait(1).to({
      graphics: mask_2_graphics_23,
      x: -183,
      y: 48.3
    }).wait(1).to({
      graphics: mask_2_graphics_24,
      x: -183,
      y: 62.6
    }).wait(1).to({
      graphics: mask_2_graphics_25,
      x: -183,
      y: 76.9
    }).wait(1).to({
      graphics: mask_2_graphics_26,
      x: -182.9,
      y: 91.2
    }).wait(1).to({
      graphics: mask_2_graphics_27,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_28,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_29,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_30,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_31,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_32,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_33,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_34,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_35,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_36,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_37,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_38,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_39,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_40,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_41,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_42,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_43,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_44,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_45,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_46,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_47,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_48,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_49,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_50,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_51,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_52,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_53,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_54,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_55,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_56,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_57,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_58,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_59,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_60,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_61,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_62,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_63,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_64,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_65,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_66,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_67,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_68,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_69,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_70,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_71,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_72,
      x: -182.9,
      y: 105.6
    }).wait(1).to({
      graphics: mask_2_graphics_73,
      x: -182.9,
      y: 105.6
    }).wait(1));

    // Layer 56
    this.instance_21 = new lib.ellipse("synched", 0);
    this.instance_21.parent = this;
    this.instance_21.setTransform(-75.8, -1.2, 1.78, 1.78, 0, 0, 0, 58.5, 58.5);
    this.instance_21._off = true;

    var maskedShapeInstanceList = [this.instance_21];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(12).to({
      _off: false
    }, 0).wait(62));

    // new mask (mask)
    var mask_3 = new cjs.Shape();
    mask_3._off = true;
    var mask_3_graphics_0 = new cjs.Graphics().p("AgDL7QgBk7AAnAQAAm/ABk8QACk8ABAAQACAAABE8IAAAiIACINIAADMQAAHAgCE7QgBE9gCAAQgBAAgCk9g");
    var mask_3_graphics_1 = new cjs.Graphics().p("Ag5L7QgYk7AAnAQAAm/AYk8QAYk8AhAAQAiAAAYE8IACAiQAQDlAFEoQABBjAABpQAAHAgYE7QgYE9giAAQghAAgYk9g");
    var mask_3_graphics_2 = new cjs.Graphics().p("AhvL7Qgvk7ABnAQgBm/Avk8QAuk8BBAAQBCAAAuE8IAFAiQAfDlAIEoQADBjgBBpQABHAgvE7QguE9hCAAQhBAAguk9g");
    var mask_3_graphics_3 = new cjs.Graphics().p("AilL7QhFk7gBnAQABm/BFk8QBFk8BgAAQBiAABFE8IAHAiQAuDlALEoQAEBjABBpQAAHAhFE7QhFE9hiAAQhgAAhFk9g");
    var mask_3_graphics_4 = new cjs.Graphics().p("AjcL7Qhbk7AAnAQAAm/Bbk8QBbk8CBAAQCBAABcE8IAJAiQA+DlAPEoQAFBjAABpQAAHAhbE7QhcE9iBAAQiBAAhbk9g");
    var mask_3_graphics_5 = new cjs.Graphics().p("AkSL7Qhyk7AAnAQAAm/Byk8QByk8CgAAQChAAByE8IALAiQBNDlAUEoQAGBjAABpQAAHAhyE7QhyE9ihAAQigAAhyk9g");
    var mask_3_graphics_6 = new cjs.Graphics().p("AlJL7QiIk7AAnAQAAm/CIk8QCJk8DAAAQDBAACIE8IAOAiQBcDlAXEoQAIBjAABpQgBHAiIE7QiIE9jBAAQjAAAiJk9g");
    var mask_3_graphics_7 = new cjs.Graphics().p("Al/L7Qiek7AAnAQAAm/Cek8QCgk8DfAAQDhAACfE8IAQAiQBrDlAbEoQAIBjAABpQAAHAieE7QifE9jhAAQjfAAigk9g");
    var mask_3_graphics_8 = new cjs.Graphics().p("Am1L7Qi2k7AAnAQAAm/C2k8QC1k8EAAAQEBAAC1E8IATAiQB5DlAgEoQAJBjABBpQgBHAi1E7Qi1E9kBAAQkAAAi1k9g");
    var mask_3_graphics_9 = new cjs.Graphics().p("AnsL7QjLk7AAnAQAAm/DLk8QDNk8EfAAQEhAADLE8IAWAiQCJDlAiEoQALBjAABpQAAHAjME7QjLE9khAAQkfAAjNk9g");
    var mask_3_graphics_10 = new cjs.Graphics().p("AohL7Qjjk7AAnAQAAm/Djk8QDik8E/AAQFAAADiE8IAYAiQCYDlAmEoQANBjAABpQAAHAjjE7QjiE9lAAAQk/AAjik9g");
    var mask_3_graphics_11 = new cjs.Graphics().p("ApYL7Qj4k7gBnAQABm/D4k8QD5k8FfAAQFgAAD4E8IAaAiQCnDlArEoQAOBjAABpQAAHAj6E7Qj4E9lgAAQlfAAj5k9g");
    var mask_3_graphics_12 = new cjs.Graphics().p("AqOL7QkQk7AAnAQAAm/EQk8QEPk8F/AAQGAAAEPE8IAcAiQC2DlAvEoQAOBjAABpQAAHAkPE7QkPE9mAAAQl/AAkPk9g");
    var mask_3_graphics_13 = new cjs.Graphics().p("ArFL7Qklk7AAnAQAAm/Elk8QEmk8GfAAQGgAAElE8IAfAiQDFDlAyEoQAQBjAABpQAAHAkmE7QklE9mgAAQmfAAkmk9g");
    var mask_3_graphics_14 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_15 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_16 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_17 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_18 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_19 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_20 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_21 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_22 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_23 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_24 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_25 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_26 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_27 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_28 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_29 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_30 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_31 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_32 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_33 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_34 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_35 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_36 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_37 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_38 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_39 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_40 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_41 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_42 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_43 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_44 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_45 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_46 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_47 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_48 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_49 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_50 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_51 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_52 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_53 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_54 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_55 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_56 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_57 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_58 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_59 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_60 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_61 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_62 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_63 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_64 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_65 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_66 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_67 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_68 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_69 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_70 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_71 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_72 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");
    var mask_3_graphics_73 = new cjs.Graphics().p("Ar7L7Qk8k7AAnAQAAm/E8k8QE9k8G+AAQHAAAE7E8IAiAiQDUDlA1EoQASBjAABpQAAHAk9E7Qk7E9nAAAQm+AAk9k9g");

    this.timeline.addTween(cjs.Tween.get(mask_3).to({
      graphics: mask_3_graphics_0,
      x: -74.9,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_1,
      x: -82.7,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_2,
      x: -90.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_3,
      x: -98.2,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_4,
      x: -105.9,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_5,
      x: -113.7,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_6,
      x: -121.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_7,
      x: -129.2,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_8,
      x: -136.9,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_9,
      x: -144.7,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_10,
      x: -152.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_11,
      x: -160.2,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_12,
      x: -167.9,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_13,
      x: -175.7,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_14,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_15,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_16,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_17,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_18,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_19,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_20,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_21,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_22,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_23,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_24,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_25,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_26,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_27,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_28,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_29,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_30,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_31,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_32,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_33,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_34,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_35,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_36,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_37,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_38,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_39,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_40,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_41,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_42,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_43,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_44,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_45,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_46,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_47,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_48,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_49,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_50,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_51,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_52,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_53,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_54,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_55,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_56,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_57,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_58,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_59,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_60,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_61,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_62,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_63,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_64,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_65,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_66,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_67,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_68,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_69,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_70,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_71,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_72,
      x: -183.4,
      y: -109
    }).wait(1).to({
      graphics: mask_3_graphics_73,
      x: -183.4,
      y: -109
    }).wait(1));

    // Layer 58
    this.instance_22 = new lib.ellipse("synched", 0);
    this.instance_22.parent = this;
    this.instance_22.setTransform(-75.8, -1.2, 1.78, 1.78, 0, 0, 0, 58.5, 58.5);

    var maskedShapeInstanceList = [this.instance_22];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(74));

    // Ellipse Grey
    this.instance_23 = new lib.grcEllipseGrey("synched", 0);
    this.instance_23.parent = this;
    this.instance_23.setTransform(-74.9, -0.3, 1, 1, 0, 0, 0, 105, 105);

    this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(74));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-296.4, -107.9, 486.4, 214.7);


  // stage content:
  (lib.animationtest = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.mcEllipse();
    this.instance.parent = this;
    this.instance.setTransform(275, 146.4, 1, 1, 0, 0, 0, -53.2, -54.9);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(306.8, 184.3, 486.4, 324.3);
  // library properties:
  lib.properties = {
    width: 550,
    height: 400,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.00,
    webfonts: {},
    manifest: [],
    preloads: []
  };




})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib, images, createjs, ss, AdobeAn;


var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	handleComplete();
}
function handleComplete() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new lib.animationtest();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS=1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih=window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
			if(isResp) {
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
					sRatio = lastS;
				}
				else if(!isScale) {
					if(iw<w || ih<h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			canvas.width = w*pRatio*sRatio;
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
		}
	}
	makeResponsive(false,'both',false,1);
	fnStartAnimation();
}
