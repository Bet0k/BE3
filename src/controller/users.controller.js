import User from '../dao/models/user.model.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ status: 'success', users });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.uid);
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
    res.json({ status: 'success', user });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    if (!username || !password || !role) {
      return res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }

    const newUser = await User.create({ username, password, role });
    res.status(201).json({ status: 'success', user: newUser });
  } catch (error) {
    res.status(400).json({ status: 'error', error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.uid, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ status: 'error', message: 'User not found' });
    res.json({ status: 'success', user: updatedUser });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.uid);
    if (!deletedUser) return res.status(404).json({ status: 'error', message: 'User not found' });
    res.json({ status: 'success', message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};
