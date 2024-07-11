// api/status.js
module.exports = (req, res) => {
    const status = {
        allstar: 'online',
        echolink1: 'offline',
        analog_reflector: 'online',
        ab_mb: 'online',
        mb2: 'unlinked',
        usrp2p25: 'online',
        dmr: 'online',
        ysf: 'offline',
        p25: 'offline',
    };
    res.json(status);
};
