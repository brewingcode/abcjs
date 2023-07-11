The function call chain to help figure out how directives are parsed and then passed (eventually) to the renderer.

```
abc_editor.js:99               var Editor = function(editarea, params) {
abc_editor.js:239              this.tunes = renderAbc(this.div, this.currentAbc, this.abcjsParams);
abc_tunebook_svg.js:78         var renderAbc = function(output, abc, parserParams, engraverParams, renderParams) {
abc_tunebook_svg.js:134        return tunebook.renderEngine(callback, output, abc, params);
abc_tunebook.js:56             tunebook.renderEngine = function (callback, output, abc, params) {
abc_tunebook.js:72                 var book = new TuneBook(abc);
abc_tunebook.js:21                 var parsed = bookParser(book); // book == abc
abc_book_parser.js:5               var bookParser = function(book) {
                                   // all this is just string manip, where each tune.abc is directives + the tune
abc_tunebook.js:96             var override = callback(div, tune, i, book.tunes[currentTune].abc); // main render
abc_tunebook_svg.js:112        function callback(div, tune, tuneNumber, abcString) {
abc_tunebook_svg.js:126        renderOne(div, tune, params, tuneNumber, 0);
abc_tunebook_svg.js:30         function renderOne(div, tune, params, tuneNumber, lineOffset) {
abc_tunebook_svg.js:52         engraver_controller.engraveABC(tune, tuneNumber, lineOffset);
engraver_controller.js:98      EngraverController.prototype.engraveABC = function (abctunes, tuneNumber, lineOffset) {
engraver_controller.js:109     this.engraveTune(abctunes[i], tuneNumber, lineOffset);
engraver_controller.js:238     EngraverController.prototype.engraveTune = function (abcTune, tuneNumber, lineOffset) {
engraver_controller.js:253     var ret = draw(this.renderer, this.classes, abcTune, this.width, maxWidth, this.responsive, scale, this.selectTypes, tuneNumber, lineOffset);
draw.js: 7                     function draw(renderer, classes, abcTune, width, maxWidth, responsive, scale, selectTypes, tuneNumber, lineOffset) {
draw.js:48                     drawStaffGroup(renderer, staffGroup, selectables, lineNumber);   
staff-group.js:9               function drawStaffGroup(renderer, params, selectables, lineNumber) {
```