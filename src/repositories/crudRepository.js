
export default function crudRepository(model){
    return {
        create : async function (data){
            try{
                return await model.create(data);
            } catch(err){
                throw err;
            }
        },
        delete : async function (id){
            try{
                return await model.findByIdAndDelete(id);
            } catch(err){   
                throw err;
            }
        },
        update : async function (id, data){
            try{
                return await model.findByIdAndDelete(id, data); 
            } catch(err){
                throw err;
            }
        },
        getById : async function(id){
            try{
                return await model.findById(id);
            }catch(err){
                throw err;
            }
        },
        getAll : async function(){
            try{
                return await model.find();
            }
            catch(err){
                throw err;  
            }
        }

    }
}
