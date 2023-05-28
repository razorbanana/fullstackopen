const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({course}) => {
  
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/> 
      <Total parts={course.parts}/>
    </div>
  )
}

const Content = ({parts}) => {
  console.log(parts)
  return (
    <div>
      {parts.map(part => 
        <Part part={part} key={part.id}/>
      )}
    </div>
  )
}

const Header =({name})=>{
  console.log(name)
  return (
    <h1>{name}</h1>
  )
}

const Part =({part})=>{
  console.log(part)
  return (
    <p>
        {part.name} {part.exercises}
      </p>
  )
}

const Total =({parts})=>{
  console.log(parts)
  return (
    <p>Number of exercises {parts.reduce((acc, part)=>acc+part.exercises,0)}</p>
  )
}

export default App