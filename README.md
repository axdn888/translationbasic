# Translation Widget

This is a simple, embeddable translation widget that can be integrated into any website.

## How to Use

1.  **Include the files**: Add the `style.css` and `script.js` files to your project.
2.  **Add the HTML**: Copy the HTML from the `<body>` of `index.html` and place it where you want the translator to appear on your site.

    ```html
    <div class="translator">
        <h1>Translation Widget</h1>
        <textarea id="inputText" placeholder="Enter text to translate..."></textarea>
        <div class="controls">
            <select id="sourceLang">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="bn">Bengali</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
                <option value="mr">Marathi</option>
            </select>
            <span>&rarr;</span>
            <select id="targetLang">
                <option value="hi">Hindi</option>
                <option value="en">English</option>
                <option value="bn">Bengali</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
                <option value="mr">Marathi</option>
            </select>
        </div>
        <button id="translateBtn">Translate</button>
        <textarea id="outputText" placeholder="Translation..." readonly></textarea>
    </div>
    <script src="script.js"></script>
    ```

3.  **Customize**: You can customize the languages in the dropdowns and the styling in `style.css` to match your website's theme.
