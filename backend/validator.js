function validateAction(action, constraints) {
    if (!constraints.allowedActions.includes(action.type)) {
        return false;
    }

    if (action.value > constraints.maxValue) {
        return false;
    }

    return true;
}

module.exports = { validateAction };
