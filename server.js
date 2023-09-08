const express = require('express');
const app = express();
const cors = require('cors');
const serveStatic = require('serve-static');
const session = require('express-session');
const fs = require('fs').promises;
const baseUrl="https://builder.smart-ui.pro/";

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/builder',
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const HtmlContentSchema = new mongoose.Schema({
    content: String,
    page: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('htmlContent', HtmlContentSchema);


const routeModel = mongoose.model('htmlContent');


//Specify url path
var $path = 'uploads'; // Physical path
var $urlpath = '/files'; // URL path

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json({limit: '50mb'}));
app.use($urlpath, serveStatic($path));

app.use(session({
    secret: 'Your_Secret_Key',
    resave: true,
    saveUninitialized: true,
    rolling: true,
    cookie: {
        httpOnly: true,
        maxAge: 1 * 60 * 60 * 1000
    }
}));


/*app.post('/upload', async (req, res) => {
    try {
        const base64Data = req.body.image;
        const filename = req.body.filename;

        if (!base64Data || !filename) {
            return res.status(500).json({
                success: false,
                message: 'No file name or data passed'
            });
        }

        await fs.writeFile(`${$path}/${filename}`, base64Data, 'base64');

        res.status(200).json({
            success: true,
            url: `${$urlpath}/${filename}` // return saved file url
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to save file'
        });
    }
});*/

app.options('/upload', cors());
app.post('/upload', async (req, res) => {
    const base64Data = req.body.image;
    const filename = req.body.filename;

    console.log(base64Data)
    console.log(`${$path}/${filename}`)


    try {
        await fs.writeFile(`${$path}/${filename}`, base64Data, 'base64')
    } catch (err){


        return res.status(500).json({
            success: false,
            message: `Failed to save file: ${err.message}`
        });

    }

    res.status(200).json({
        success: true,
        url: `${baseUrl}${$urlpath}/${filename}`
    });
});


/*
app.post('/upload', (req, res) => {
    const base64Data = req.body.image;
    const filename = req.body.filename;
    require('fs').writeFile($path + '/' + filename, base64Data, 'base64', () => {
        res.status(200).json({
            success: true,
            url: `${$urlpath}/${filename}` // return saved file url
        });
    });
});
*/


app.post('/save', async (req, res) => {
    try {
        const newPageValue = req.body.page;
        const content = req.body.html;

        console.log(newPageValue);
        console.log(content);

        if (!newPageValue || !content) {
            return res.status(500).json({
                success: false,
                message: 'forgot to send page or content'
            });
        }

        const data = {
            content,
            date: new Date(),
            page: newPageValue
        };

        const result = await routeModel.findOneAndUpdate(
            {page: newPageValue},
            data,
            {upsert: true, new: true, lean: true}
        );

        res.status(200).json({
            success: true,
            result
        });

    } catch {
        res.status(500).json({
            success: false,
            message: 'Failed to save content to the database.'
        });
    }
});
app.get('/load', async (req, res) => {
    try {
        const pageValue = req.query.page || '/';
        console.log(pageValue)
        const result = await routeModel.findOne({page: pageValue});

        if (!result) {
            return res.status(200).json({
                success: true,
                message: 'page not found'
            });
        }

        res.status(200).json({
            success: true,
            html: result.content
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to load HTML from database.'
        });
    }
});
const jsxTransform = require("html-to-jsx-transform")
app.get('/source-code', async (req, res) => {
    try {
        const pageValue = req.query.page || '/';
        console.log(pageValue)
        const result = await routeModel.findOne({page: pageValue});

        if (!result) {
            return res.status(200).json({
                success: true,
                message:"err"
            });
        }

        res.status(200).json({
            success: true,
            jsx: jsxTransform.htmlToJsx(result.content)
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to load jsx  from database.'
        });
    }
});


app.get('/all', async (req, res) => {
    try {
        const results = await routeModel.find();

        if (!results || results.length === 0) {
            return res.status(200).json({
                success: true,
                message: 'Pages not found'
            });
        }

        const pages = results.map(result => ({
            page: result.page,
            content: result.content
        }));

        res.status(200).json({
            success: true,
            pages
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error loading pages from database.'
        });
    }
});




app.listen(8081, function () {
    console.log('App running on port 8081');
});
