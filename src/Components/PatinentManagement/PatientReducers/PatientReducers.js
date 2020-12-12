
export const initialState = [
    
]

export const patientReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PATIENT":
            const addPatient = {
                id: action.id,
                name: action.name
            }
            return [...state, addPatient]
    
        default:
            return state;
    }
}


