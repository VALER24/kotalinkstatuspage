// api/status.js
module.exports = (req, res) => {
    const status = {
        kotalink: 'Okay'
        allstar: 'online',
        echolink1: 'online',
        echolink2: 'offline',
        echolink3: 'unlinked',
        analog: 'online',
        ab_mb: 'online',
        mb: 'unlinked',
        usrp2p25: 'offline',
        dmr: 'online',
        ysf: 'online',
        p25: 'offline',
    };
    res.json(status);
};
