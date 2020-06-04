const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const fs = require('fs');
const {Program} = require('../models/program.model');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASS);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log('db connected')
});

const progs = JSON.parse(fs.readFileSync(`${__dirname}/preset-programs.json`, 'utf-8'));

const importProgs = async () => {
    try {
        await Program.create(progs);
        console.log(process.argv);
        console.log(progs);
        process.exit();
    } catch (e) {
        console.log(e);
    }
};

const deleteProgs = async () => {
    try {
        await Program.deleteMany();
        console.log(process.argv);
        console.log('deleted...');
        process.exit();
    } catch (e) {
        console.log(e);
    }
};

const arg = process.argv[2];

if(arg === '--import'){
    importProgs()
}else if(arg === '--delete'){
    deleteProgs()
}else {
    console.log('please provide arg like --import or --delete')
}


