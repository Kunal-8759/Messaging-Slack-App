import User from '../schema/userSchema.js';
import crudRepository from './crudRepository';

const userRepository = {
    ...crudRepository(User),

    getByEmail : async function(email){
        return await User.findOne({email});
    },
    getByUsername : async function(username){
        return await User.findOne({username});
    }
}

return userRepository;