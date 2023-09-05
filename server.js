const express = require('express');
const app = express();
const cors = require('cors');
const serveStatic = require('serve-static');
const session = require('express-session');

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
var $path =  __dirname + '/uploads'; // Physical path
var $urlpath = '/uploads'; // URL path

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json({ limit: '50mb' }));
app.use($urlpath, serveStatic($path));

app.use(session({
    secret: 'Your_Secret_Key',
    resave: true,
    saveUninitialized: true,
    rolling: true, 
    cookie: {
        httpOnly: true,
        maxAge: 1*60*60*1000
    }
}))

app.post('/upload', (req, res) => {
    const base64Data = req.body.image;
    const filename = req.body.filename;
    require('fs').writeFile($path + '/' + filename, base64Data, 'base64', ()=>{
        res.status(200).json({
            success: true,
            url: `${$urlpath}/${filename}` // return saved file url
        })
    });
});

// Save content into session (normally you will save the content into a database)


app.post('/save', async (req, res) => {
    try {
        const newPageValue = req.body.page;
        const content = req.body.html;

        console.log(newPageValue)
        console.log(content)

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
            { page: newPageValue },
            data,
            { upsert: true, new: true, lean: true }
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

        const result = await routeModel.findOne({ page: pageValue });

        if (!result) {
            return res.status(200).json({
                success: true,
                message: 'HTML не найден'
            });
        }

        res.status(200).json({
            success: true,
            html: result.content
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Не удалось загрузить HTML из базы данных.'
        });
    }
});



// Load content from session (normally you will load the content from a database)
/*
app.get('/load', (req, res) => {
    res.json({
        html: req.session.html
    });
});
*/





app.listen(8081, function() {
    console.log('App running on port 8081');
});



/*
app.post('/save', (req, res) => {

    req.session.html = req.body.html;

    res.status(200).json({
        success: true,
        // html: req.body.html
    });
});*/