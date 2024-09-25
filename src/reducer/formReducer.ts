export default function formReducer(state:any,action:any){

switch(action.type){
    case 'category':
        return {...state,category:action.category}
    case 'businessName':
               return {...state,businessName:action.businessName}
    case 'registrationId':  
              return {...state,registrationId:action.registrationId}     
    case 'website':
        return {...state,website:action.website} 
    case 'ownerName':
        return {...state, ownerName:action.ownerName}
    case 'contact':
        return {...state, contact:action.contact}
    case 'addressLine1':
        return {...state, addressLine1:action.addressLine1}
    case 'addressLine2':
        return {...state, addressLine2:action.addressLine2}
    case 'city':
        return {...state, city:action.city};
    case 'state':
        return {...state, state:action.state};
    case 'pincode':
        return {...state,pincode:action.pincode};
    case 'photos':
        return {...state, photos:action.photos};
     default:
        return state;                         
 }
}