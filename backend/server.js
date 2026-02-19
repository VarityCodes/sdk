const express = require("express");
const { validateAction } = require("./validator");

const app = express();
app.use(express.json());

app.post("/validate", async (req, res) => {
    const { action, constraints } = req.body;

    const result = validateAction(action, constraints);

    res.json({
        success: result
    });
});

app.listen(3000, () => {
    console.log("Varity Backend running on port 3000");
});
