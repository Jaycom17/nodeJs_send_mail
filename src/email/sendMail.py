from email.message import EmailMessage
import ssl
import smtplib
import sys

def sendEmail(asunto,cuerpo):
    emailEmisor = "jorejuela521@gmail.com"
    passEmisor = "eykmmtcmpvggtnfy"

    emailReceptor = "juanorejuela499@gmail.com"

    em = EmailMessage()

    em['From'] = emailEmisor
    em['To'] = emailReceptor
    em['Subject'] = asunto
    em.set_content(cuerpo, subtype='html')

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(emailEmisor, passEmisor)
        smtp.sendmail(emailEmisor, emailReceptor, em.as_string())
        
sendEmail(sys.argv[1],sys.argv[2])