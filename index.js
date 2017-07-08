module.exports = {
    book: {
        assets: './book',
        js: [
            'zoomify.js'
        ],
        css: [
            'zoomify.css'
        ]
    },
    hooks: {
        "page": function (page) {
            alert("a");
            return page;
        }
    }
};
