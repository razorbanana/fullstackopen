const Course = ({ course }) => {

    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Content = ({ parts }) => {
    console.log(parts)
    return (
        <div>
            {parts.map(part =>
                <Part part={part} key={part.id} />
            )}
        </div>
    )
}

const Header = ({ name }) => {
    console.log(name)
    return (
        <h2>{name}</h2>
    )
}

const Part = ({ part }) => {
    console.log(part)
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Total = ({ parts }) => {
    console.log(parts)
    return (
        <p><b>total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</b></p>
    )
}

export default Course