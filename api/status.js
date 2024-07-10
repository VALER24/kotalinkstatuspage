// api/status.js
module.exports = (req, res) => {
    const status = {
        allstar: 'online',
        echolink: 'offline',
        ab_mb: 'online',
        mb: 'online',
        usrp2p25: 'offline',
        dmr: 'online',
        ysf: 'online',
        p25: 'offline',
    };
    res.json(status);
};
