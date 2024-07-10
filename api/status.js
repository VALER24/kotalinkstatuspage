// api/status.js
module.exports = (req, res) => {
    const status = {
        allstar: 'online',
        echolink: 'offline',
        dmr: 'online',
        ysf: 'online',
        p25: 'offline',
    };
    res.json(status);
};
