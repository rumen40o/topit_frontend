import './AddEmpTest.css'

const bgButtonClick = () => {
    console.log('poopoo')
}

function AddEmpTest() {
    return (
        <div id='add-emp'>
            <button id='bg-button' onClick={ bgButtonClick }></button>
            <button id='add-emp-button'>Add Employee
                <div id='input-div'>
                    <input id='name-input'></input>
                    <input id='email-input'></input>
                    <input id='job-input'></input>
                    <input id='phone-input'></input>
                    <input id='avatar-input'></input>
                    <div id='button-div'>
                        <button id='submit-button'>Add</button>
                        <button id='close-button'>Close</button>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default AddEmpTest