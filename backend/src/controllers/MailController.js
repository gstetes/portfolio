const connection = require('../database/connection');
const transporter = require('../config/mailer');

module.exports = {
  async create(req, res) {
    const {
      sender, mail, whatsapp, message,
    } = req.body;

    try {
      const info = await transporter.sendMail({
        from: '"Contato GStetes" <gstetes@gmail.com>',
        to: '"Guilherme Stetes" <stetesguilherme@gmail.com>',
        subject: 'Você tem um novo contato em seu site',
        text: 'Segue a mensagem de contato recebida.',
        html: `<center><h1>Novo contato</h1></center><span><b>De: </b>${sender}</span><br><span><b>Email: </b>${mail}</span><br><span><b>WhatsApp: </b>${whatsapp}</span><br><span><b>Mensagem: </b>${message}</span><br>`,
      });

      await connection('mail')
        .insert({
          sender,
          email: mail,
          whatsapp,
          message,
        });

      return res.json({ id: info.messageId });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
