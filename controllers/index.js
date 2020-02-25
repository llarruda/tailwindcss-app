'use strict';

module.exports.controller = (app) => {
    // get homepage
    app.get('/', (req, res) => {
        res.render('index',
            { locals: { title: 'Express',
                frontend: 'Tailwindcss' } 
            }
        );
    });
}