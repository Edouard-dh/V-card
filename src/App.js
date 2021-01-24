import './scss/main.scss';
import Body_left from './components/Body_left';
import Body_right from './components/Body_right';



const App =() => {
//   const [projets,setProjet] = useState([
//     {
//     id:1,
//     name:"La taverne",
//     image:"https://la-taverne.edouard-dhalluin.fr/wp-content/uploads/2020/09/cropped-tav-1.jpg",
//     text:"coucou",
//     url:"https://la-taverne.edouard-dhalluin.fr/"
//   },
//   {
//     id:2,
//     name:"Gw2 fan site",
//     image:"",
//     text:"coucou",
//     url:""

//   },
//   {
//     id:3,
//     name:"the Ho Ho Ho liste",
//     image:"",
//     text:"coucou",
//     url:""

//   },
// ]);
//   const ListProjet =projet.map(projet=>{
//     return(
//       <Projet
//       key={projet.id}
//       name={projet.name}
//       text={projet.text}
//       image={projet.image}
//       />
//     )
//   })

  return (
    <div className="App_full">
      <div className="App_top">
        <Body_left />
        <Body_right />
      </div>
    </div>
  );

  }
export default App;
