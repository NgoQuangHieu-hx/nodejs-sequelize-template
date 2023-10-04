const User = require('../models/user');

async function createMigration() {
    try {
        // Create User table
        await User.sync({ alter: true });
        console.log('Table User created successfully!');

    } catch (error) {
        console.error('Error creating table:', error);
    }
}

createMigration();