'use strict';

var minidom = require('minidom');

exports.wordsPerMinute = 200;
exports.countWords = function (content) {
    return content.split(/\b\S+\b/g).length - 1;
};

exports.init = function (engine) {
    var original = engine.loadContent;

    engine.loadContent = function (entry, content, callback) {
        original(entry, content, function (transformedContent) {
            var dom = minidom('<div>' + transformedContent + '</div>'),
                text = dom.children[0].textContent,
                numberOfWords = exports.countWords(text);

            entry.numberOfWords = numberOfWords;
            entry.readingSpeed = Math.round(numberOfWords / exports.wordsPerMinute * 60);

            callback(transformedContent);
        });
    };
};