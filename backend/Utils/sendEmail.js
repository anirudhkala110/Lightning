import nodemailer from 'nodemailer';

const sendEmail = async (email, subject, text) => {
    return new Promise((resolve, reject) => {
        console.log('Trying to sending Gmail. . . ')
        try {
            var transporter = nodemailer.createTransport({
                service: "Gmail",
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "AIhomeslog@gmail.com",
                    pass: "cwny msqo coii iqly",
                },
            });
            console.log("Entered in the sending Zone. . .")
            var mailOptions = {
                from: 'AIhomeslog@gmail.com',
                to: email,
                subject: 'Data From frontend send by Ananymous...',
                text: '\n' + subject + '\n' + text,
                // html: text
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log("Error occured is: ", error);
                    reject(error);
                } else {
                    console.log('Email sent: ' + info.response);
                    resolve(true);
                }
            });
        }
        catch (error) {
            console.log("Email not sent");
            console.log(error);
            reject(error);
        }
    });
}

export default sendEmail;
