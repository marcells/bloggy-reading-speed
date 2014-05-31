# bloggy-reading-speed

> A reading speed calculator for blog posts in bloggy, a small and lightweight blog engine for node.js.

## Quickstart

That's everything you need. Just call the `engine.extendWith()` function of the bloggy engine. But please ensure to register bloggy-reading-speed with `extendWith()` __after__ you've registerd a rendering engine like `bloggy-marked`.

```Javascript
var engine = require('bloggy')();

engine.extendWith(require('bloggy-reading-speed'));
```

After the content of a blog entry is read, it has to new fields.
- `numberOfWords` contains the number of words
- `readingSpeed` contains the needed time in seconds to read the article

## Additional options

You're able to change the following settings.

```Javascript
var engine = require('bloggy')(),
    bloggyReadingSpeed = require('bloggy-reading-speed');

// Shown values are the default values
bloggyReadingSpeed.wordsPerMinute = 200;       			// The average words per minute of your reader
bloggyReadingSpeed.countWords = function (content) {  	// You are able to override the logic, how words are count
	return [number of words];
};

engine.extendWith(bloggyReadingSpeed);

```

License
-------

The MIT License (MIT)

Copyright (c) 2014 Marcell Spies

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.