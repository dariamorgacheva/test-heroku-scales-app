import modes from '../Database/ModesDatabase.js';
import bebops from '../Database/BebopScales.js';

// function setScale(scale) {
//   setSelectedScales(scale)
// }

export default function Home() {
  return (
    <div>
      <h1>Select scales that you want to practice today: </h1>

    

    {[...modes, ...bebops].map((scale, index) => {
          return (
            <li key={index}>
                  <input
                  //  onChange={(event)=>dispatch(SET_SELECTED_SCALES, setSelectedScales(scale))}
                    type="checkbox"
                    id={index}
                    name={scale.name}
                  />
                  <label htmlFor={index}>{scale.name}</label>
           {/* obj[`${name}`] = !obj[`${name}`] */}
             </li>
           );

        })}
      
    </div>
      );
}

// const mapDispatchToProps = { setSelectedScales };

// export default connect(
//   null,
//   mapDispatchToProps
// )(Home);