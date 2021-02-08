import React, { useContext, ReactElement, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function ListadoProyectos(): ReactElement | null {
	const { proyectos, obtenerProyectos } = useContext(proyectoContext);

	useEffect(() => {
		obtenerProyectos();
		// eslint-disable-next-line
	}, []);

	if (proyectos.length === 0)
		return <p>No hay proyectos, comienza creando uno</p>;

	return (
		<ul className="listado-proyectos">
			<TransitionGroup>
				{proyectos.map((proyecto) => (
					<CSSTransition
						key={`item-proyecto-${proyecto.id}`}
						timeout={200}
						classNames="proyecto"
					>
						<Proyecto proyecto={proyecto} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</ul>
	);
}
