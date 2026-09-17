



function Student({ name = 'abcedfg', age = 2000, roll = 10000, male = true }) {

    return (
        <div className='student_class'>

            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>roll:{roll}</p>
            <p>male:{male?"Yes" :"No"}</p>
        </div>);
}

export default Student;