import React, { useReducer, useRef } from 'react';
import { initialState, patientReducer } from '../PatientReducers/PatientReducers';




const PatientManagement = () => {

    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch({type: "ADD_PATIENT", id: state.length + 1, name: nameRef.current.value})
        nameRef.current.value = ""
    }

    return (
        <div style={{textAlign: "center", border: "3px solid red", padding: "50px 0", margin: "50px 0"}}>

            <h2>Patient Management count : {state.length}</h2>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" placeholder="Patient name" />
            </form>

            <p>Patient name</p>
            <ul>
                {
                    state.map(patient => <li key={patient.id}>{patient.name}</li>)
                }
            </ul>

        </div>
    );
};

export default PatientManagement;