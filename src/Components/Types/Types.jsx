/* eslint-disable react/prop-types */
import './_types.scss'

const Types = ({data}) => {

	const types = data && data.types ? data.types : [];

	return (
		<>
			{types.map((type) => (
				<div key={type.type.name}>
					<span className={`type ${type.type.name}`}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</span>
				</div>
			))}
		</>
	);
};

export default Types;