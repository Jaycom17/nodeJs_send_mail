const { Router } = require('express');
const { PythonShell } = require('python-shell');
const router = Router();

const options ={
    mode: 'text',
    pythonPath: 'python3',
    scriptPath: 'src/email',
    args : []
}

function createBody(name, email, phoneNumber, message){
    let body = `<h1>Contact Form</h1>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone Number: ${phoneNumber}</p>
    <p>Message: ${message}</p>`;
    return body;
}


router.post('/send-email', async (req, res) => {
    const { name, email, phoneNumber, subject, message } = req.body;
    options.args = [subject, createBody(name, email, phoneNumber, message).toString()];
    await PythonShell.run('sendMail.py', options).then({});
    res.json({message: "Email sent"});

});

module.exports = router;