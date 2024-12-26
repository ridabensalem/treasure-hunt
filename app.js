const express = require('express');
const app = express();
const PORT = 3000;

// Sample data
let areas = [
    { id: 1, name: 'Golden Forest', treasure: 50 },
    { id: 2, name: 'Crystal Cave', treasure: 100 },
    { id: 3, name: 'Sunken Ship', treasure: 75 },
];

let totalTreasureCollected = 0;

// Get available areas
app.get('/api/areas', (req, res) => {
    res.status(200).send(areas);
});

// Collect treasure from an area
app.post('/api/areas/:id/collect', (req, res) => {
    const areaId = parseInt(req.params.id);
    const area = areas.find(a => a.id === areaId);

    if (!area) {
        return res.status(404).send({ error: 'Oh No Traverler you are lost !' });
    }

    if (area.treasure === 0) {
        return res.status(400).send({ error: 'You are too late ,there is no treasure here ' });
    }

    totalTreasureCollected += area.treasure;
    area.treasure = 0;

    res.status(200).json({
        message: `You collected treasure from ${area.name}!`,
        totalTreasureCollected,
    });

   
});
app.listen(PORT, () => {
    console.log('Server running on'+ PORT);
});

module.exports = app;
