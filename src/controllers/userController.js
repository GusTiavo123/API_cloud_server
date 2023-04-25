const { User } = require('../models/user.js');


exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return res.status(404).send('User not found');
      }
      if (user.password !== password) {
        return res.status(401).send('Incorrect password');
      }
      res.status(201).send("user logged in id " + user._id);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error in login');
    }
  };

exports.singUp = async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).send('User created');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error in singUp');
    }
};

exports.updateUsername = async (req, res) => {
    const { id } = req.params;
    const { newUsername } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.username = newUsername;
        await user.save();
        return res.status(201).send('Username updated');

    } catch (error) {
        console.error(error);
        res.status(500).send('Error in updateUsername');
    }
};

exports.updatePassword = async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.password = newPassword;
        await user.save();
        return res.status(201).send('User password updated');

    } catch (error) {
        console.error(error);
        res.status(500).send('Error in updatePassword');
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try{
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send('User deleted');

    } catch (error) {
        console.error(error);
        res.status(500).send('Error in deleteUser');
    }
};

