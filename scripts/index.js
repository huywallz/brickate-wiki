const container = document.getElementById("content");
const params = new URLSearchParams(window.location.search);
const path = params.get('p');

let targetFile;
if (path) {
    const formatted = path.replaceAll('.', '/');
    targetFile = `files/${formatted}.md`;
    document.getElementById("title").innerText = path;
} else {
    targetFile = "index.md";
}

fetch(targetFile, { cache: 'no-store' }).then(response => {
    if (!response.ok) throw new Error("File not found");
    return response.text();
}).then(md => {
    container.innerHTML = marked.parse(md);

    Array.from(document.querySelectorAll('.codeblock')).forEach(block => {
        const rawCode = block.innerText;
        try {
            block.innerHTML = highlightLua(rawCode);
        } catch (e) {
            console.error("Luaparse failed:", e);
        }
    });

    Array.from(document.querySelectorAll('.cheatsheet')).forEach(block => {
        const rawCode = block.innerText;
        try {
            block.innerHTML = highlightLua(rawCode, true);
        } catch (e) {
            console.error("Luaparse failed:", e);
        }
    });
}).catch(err => {
    container.innerHTML = `<h1>404</h1><p>Could not find ${targetFile}</p>`;
});

function highlightLua(code, enabletype) {
    const parser = luaparse.parse(code, { wait: true, ranges: true });
    let html = "";
    let lastPos = 0;

    const typeMap = {
        8:  'hl-id',
        32: 'hl-punct',
        2:  'hl-string',
        16:  'hl-number',
        4: 'hl-keyword',
        64: 'hl-bool',
        128: 'hl-nil',
        256: 'hl-vararg'
    };

    const types = [
        "string", "number", "boolean", "function", "table",
        "void", "bk"
    ];

    const special = [
        "vector3", "vector2", "color", "quaternion", "matrix",
        "object", "enum"
    ];

    const whatever = [
        "string", "number", "boolean", "function", "table",
        "MouseInput", "KeyInput"
    ];

    let prevColon = false;
    let metBKType = false;
    while (true) {
        const token = parser.lex();
        
        if (token.type === 1) break; 

        if (token.range[0] > lastPos) {
            html += escapeHtml(code.substring(lastPos, token.range[0]));
        }

        const className = typeMap[token.type];
        const content = code.substring(token.range[0], token.range[1]);

        if (enabletype && (
            ([8, 4].includes(token.type) && prevColon && types.includes(content))
            || (token.type == 8 && (special.includes(content) && metBKType || whatever.includes(content)))
        )) {
            metBKType = content === "bk";
            html += `<span class="hl-type">${escapeHtml(content)}</span>`
        } else if (token.type == 8 && content == "bk") {
            html += `<span class="hl-bk">bk</span>`;
        } else if (className) {
            html += `<span class="${className}">${escapeHtml(content)}</span>`;
        } else {
            html += escapeHtml(content);
        }

        lastPos = token.range[1];

        prevColon = token.type === 32 && [':', ',', '{'].includes(content);
    }

    html += escapeHtml(code.substring(lastPos));
    return html;
}

function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}