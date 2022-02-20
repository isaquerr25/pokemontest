const validatePath = (value) => {
    return String(value).match(/^[NOSE]+$/);
};

module.exports = { validatePath };
