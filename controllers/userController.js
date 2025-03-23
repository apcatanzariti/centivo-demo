const User = require('../models/User');

const getAllUsers = async (req, res) => {
    const users = await User.find().lean().exec();
    try {
        if (users.length === 0) {
            return res.status(400).json({ message: "No users present. Please try again later." });
        } else {
            res.status(200).json(users);
        };
    } catch (err) {
        res.status(500).json({ message: 'Internal server error. Please try again.' });
    };
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    const byteSize = Buffer.byteLength(id);

    if (byteSize !== 24) {
        return res.status(400).json({ message: 'Invalid user id - please try again.' });
    };

    const user = await User.findById(id).where('age').gt(21).lean().exec();

    try {
        if (!user) {
            res.status(400).json({ message: 'No user found, or user is under 21 years old. Please try again.'});
        } else {
            res.status(200).json(user);
        };
    } catch (err) {
        res.status(500).json({ message: 'Internal server error. Please try again.' });
    };
};

module.exports = { getAllUsers, getUserById };