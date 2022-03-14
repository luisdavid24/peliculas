// import './App.css';
import Pelicula from './Pelicula.js';
import PageWrapper from './PageWrapper.js';
import Paginacion from './Paginacion.js';
import {useEffect,useState} from 'react';

function ListadoPeliculas() {

	const [paginaActual,setPaginaActual]= useState(1);
    const [peliculas,setPeliculas]=useState([]);
	const TOTAL_POR_PAGINA=4;
	useEffect(() => {
		buscarPeliculas();
	}, [])
	
	const buscarPeliculas = async()=> {
		let url='https://cors-ahywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';
		
		//https://cors-ahywhere.herokuapp.com/

		let respuesta= await fetch(url,{
			"method":'GET',
			// "mode":'no-cors',
			"headers":{
				"Accept":'application/json',
				"Content-Type":'application/json',
				"Origin":'https://lucasmoy.dev/'
			}

		});
		let json= await respuesta.json();
		alert(json);
		setPeliculas(json);
	}
	

	const getTotalPaginas=()=>{
		let cantidadTotalDePeliculas=peliculas.length;
		return Math.ceil(cantidadTotalDePeliculas/TOTAL_POR_PAGINA);
	}
	
	let peliculasPorPagina=peliculas.slice(
		(paginaActual-1)*TOTAL_POR_PAGINA,
		paginaActual *TOTAL_POR_PAGINA
	);
	return (
	  <PageWrapper>
		  	{
				  peliculasPorPagina.map(pelicula=>
		  			<Pelicula 
						titulo={pelicula.titulo} 
						calificacion={pelicula.calificacion}
						directo={pelicula.directo}
						actores={pelicula.actores}
						fecha={pelicula.fecha}
						duracion={pelicula.duracion}
						img={pelicula.img}>
						{pelicula.descripcion}
					</Pelicula>)
			}
			<Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina)=>{
				setPaginaActual(pagina)
			}}/>
	  </PageWrapper>
    );
}

export default ListadoPeliculas;
