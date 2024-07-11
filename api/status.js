const fetch = require('node-fetch');

async function fetchASLStatus() {
    const response = await fetch('https://stats.allstarlink.org/api/stats/mapData');
    const data = await response.json();

    const nodeId = 57686;
    const node = data.find(node => node.node === nodeId);

    return node ? 'online' : 'offline';
}

module.exports = async (req, res) => {
    try {
        const aslStatus = await fetchASLStatus();

        const status = {
            allstar: aslStatus,
            echolink1: "online",
            echolink2: "offline",
            echolink3: "unlinked",
            analog: "online",
            ab_mb: "online",
            mb: "unlinked",
            usrp2p25: "offline",
            dmr: "online",
            ysf: "online",
            p25: "online"
        };

        res.status(200).json(status);
    } catch (error) {
        console.error('Error fetching ASL status:', error.message);
        res.status(500).json({ error: 'Error fetching ASL status', details: error.message });
    }
};
