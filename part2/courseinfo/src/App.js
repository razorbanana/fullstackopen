const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
        <Course course={course} key={course.id}/>
      )}
    </div>
  )
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
    <h2>{name}</h2>
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
    <p><b>total of {parts.reduce((acc, part)=>acc+part.exercises,0)} exercises</b></p>
  )
}

export default App