const { User } = require('../models/User');

const createUser = async (request, response) => {
  const { name, email, image } = request.body;

  try {
    const user = await User.create({
      name,
      email,
      image,
    });

    return response.status(201).json({
      message: 'User created successfully',
      user,
    });
  } catch (err) {
    return response.status(400).json({
      message: 'User creation failed',
      error: err.message,
    });
  }
};

module.exports = { createUser };
