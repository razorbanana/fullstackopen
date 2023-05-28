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
      <Header course={course.name} />
      <Content parts={course.parts}/> 
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.parts.map(part => 
        <Part part={part} key={part.id}/>
      )}
    </div>
  )
}

const Header =(props)=>{
  console.log(props)
  return (
    <h1>{props.course}</h1>
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

const Total =(props)=>{
  console.log(props)
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

export default App