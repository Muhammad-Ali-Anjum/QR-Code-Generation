const Link = require('../models/Link');
const QRCode = require('qrcode');

exports.uploadLink = async (req, res) => {
    const { url } = req.body;
    try {
        const qrCodeDataURL = await QRCode.toDataURL(url);
        const newLink = new Link({ url, qrCode: qrCodeDataURL, createdBy: req.user.id });
        await newLink.save();
        res.status(201).json({ message: 'Link uploaded successfully', qrCode: qrCodeDataURL });
    } catch (error) {
        res.status(500).json({ error: 'Failed to upload link' });
    }
};

exports.getLinks = async (req, res) => {
    try {
        const links = await Link.find({ createdBy: req.user.id });
        res.status(200).json(links);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch links' });
    }
};