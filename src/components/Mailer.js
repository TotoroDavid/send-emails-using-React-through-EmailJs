import emailjs from 'emailjs-com';

const Mailer = () => {

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ir9gye6', 'template_o5wqv05', e.target, 'user_6BdoM3U1X5x8a8pGaK9iX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className='col-8 pt-2 form-group mx-auto'>
                        <input type="text" className='form-control' placeholder='Name' name='name' />
                    </div>
                    <div className='col-8 pt-2 form-group mx-auto'>
                        <input type="email" className='form-control' placeholder='Email Address' name='email' />
                    </div>
                    <div className='col-8 pt-2 form-group mx-auto'>
                        <input type="text" className='form-control' placeholder='Subject' name='subject' />
                    </div>
                    <div className='col-8 pt-2 form-group mx-auto'>
                        <textarea className='form-control' id='' col='30' rows='8' placeholder='Your message' name='message' />
                    </div>
                    <div className='col-8 pt-3 mx-auto'>
                        <input type="submit" className='btn btn-info' value='Send Message' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Mailer
