const modalReducer = (state,{type,payload}) =>{

    switch(type){
        case "OPEN_SIGNIN_MODAL":
            return{
                ...state,
                isSignInModalOpen : !state.isSignInModalOpen
            }

        case "OPEN_SIGNUP_MODAL":
                return{
                    ...state,
                    isSignUpModalOpen : !state.isSignUpModalOpen
                }

        case "OPEN_PURCHASE_MODAL":
                return{
                    ...state,
                    isPurchaseModalOpen : true,
                    id:payload

                }
        case "CLOSE_PURCHASE_MODAL":
                return{
                    ...state,
                    isPurchaseModalOpen:false,
                    id:null
                }
        default:
            return state
    }
}
export default modalReducer