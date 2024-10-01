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
        case "OPEN_ALERT":
                return{
                    ...state,
                    isAlertVisible:!state.isAlertVisible
                }

        case "OPEN_ADDCOURSE_MODAL":
                return{
                    ...state,
                    isAddCourseModalOpen:!state.isAddCourseModalOpen
                }

        case "OPEN_UPDATE_MODAL":
            return{
                ...state,
                isUpdateCourseModalOpen:true,
                id:payload
            }
        case "CLOSE_UPDATE_MODAL":
                return{
                    ...state,
                    isUpdateCourseModalOpen:false,
                    id:null
                }

        case "TOGGLE_COURSE":
            return{
                ...state,
                courseUpdated:!state.courseUpdated
            }
        default:
            return state
    }
}
export default modalReducer