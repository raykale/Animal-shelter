import { Link } from 'react-router-dom'

export default function Animals(props) {
    return(<div>
        {props.animals.map((animal) => {
            return(
            <article key={animal._id}>
                <h3>{animal.title}</h3>
                <Link to={`/animal/${animal._id}`}>This the link to the Show Page of {`${animal._id}`}</Link>
            </article>)
        })}
    </div>)
}


// import styles from './Animals.module.scss'
// import Animal from '../Animal/Animal'
 
// export default function Animals ({ 
//     newAnimal, 
//     createAnimal, 
//     setNewAnimal, 
//     animals,
//     deleteAnimal
// }){
//     return(
//         <div className={styles.animals}>
//             Add New Animal:<input 
//             className={styles.input}
//             type="text" 
//             value={newAnimal.title} 
//             onChange={(e) => {
//                 setNewAnimal({...newAnimal, title: e.target.value})
//             }} 
//             onKeyDown={(e) => {
//                 e.key === 'Enter' && createAnimal()
//             }}
//             />
//              <h3>Animals</h3>
//         {animals.map(animal => (
//             <Animal 
//                 key={animal._id} 
//                 animal={animal}
//                 buttonAction={moveToCompleted}
//                 buttonText={'Complete'}
//             />
//         ))}
//         <h3>Completed Animals</h3>
//         {completedAnimals.map(animal =>(
//             <Animal
//                 key={animal._id}
//                 animal={animal}
//                 buttonAction={deleteAnimal}
//                 buttonText={'Delete'}
//             />
//         ))}
//         </div>
//     )
// }