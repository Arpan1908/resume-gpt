const addUser = (User)=>({email,billingID,plan,endDate})=>{
    if(!email || !billingID || !plan || !endDate) {
        throw new Error('Missing required fields')
    }
    const user = new User({email,billingID,plan,endDate});
    return user.save();

}

const getUser = (User)=>()=>{
    return User.find({});
}

const getUserbyEmail = (User)=>async(email)=>{
    return User.findOne({email});
}

const getUserbyBillingID = (User)=>async(billingID)=>{
    return User.findOne({billingID});
}
const updatePlan = (User)=>async(email,plan,)=>{
    return User.findoneandupdate({email,plan});
}

module.exports = (User) => {
    return{
        addUser: addUser(User),
        getUser: getUser(User),
        getUserbyEmail: getUserbyEmail(User),
        getUserbyBillingID: getUserbyBillingID(User),
        updatePlan: updatePlan(User)
    }
}
