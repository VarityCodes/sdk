function generateAction() {
    return {
        type: "TRANSFER",
        value: Math.floor(Math.random() * 100)
    };
}

module.exports = { generateAction };
