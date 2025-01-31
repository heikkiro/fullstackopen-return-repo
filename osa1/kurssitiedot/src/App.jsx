const Header = ({course}) => {
  return <h1>-{course.name}-</h1>
}

const Part = ({name, exercises}) => {
  return (
    <>
      <p>
        Part name: {name} - Number of exercises in this part: {exercises}
      </p>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <ul>
      <li><Part name={parts[0].name} exercises={parts[0].exercises} /></li>
      <li><Part name={parts[1].name} exercises={parts[1].exercises} /></li>
      <li><Part name={parts[2].name} exercises={parts[2].exercises} /></li>
      </ul>
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      <p> Total number of exercises: <strong>{parts[0].exercises + parts[1].exercises + parts[2].exercises}</strong> </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return(
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div >
  )
}

export default App