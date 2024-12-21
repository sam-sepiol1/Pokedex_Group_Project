/* eslint-disable react/prop-types */
import { IoMdArrowBack } from 'react-icons/io';
import { useEffect, useState, useRef } from 'react';
import { fetchPokemonDetails } from '../Card/api';
import Button from '../Button/Button';
import './_popup.scss';
import Types from '../Types/Types';

const Popup = ({ id, onClose }) => {
	const [data, setData] = useState({});
	const [description, setDescription] = useState('');
	const popupRef = useRef(null); // Référence au conteneur du popup

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetchPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`);
			setData(result);
		};
		fetchData();
	}, [id]);

	const getBackgroundClass = (types) => {
		if (!types || types.length === 0) return '';
		return types[0].type.name;
	};

	useEffect(() => {
		const fetchDescription = async () => {
			const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
			const descriptionData = await data.json();
			setDescription(descriptionData.flavor_text_entries[0].flavor_text);
		};
		fetchDescription();
	}, [id]);

	// Détecte les clics en dehors du popup
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (popupRef.current && !popupRef.current.contains(event.target)) {
				onClose(); // Ferme le popup si le clic est à l'extérieur
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClose]);

	return (
		<div className={`allInfo ${getBackgroundClass(data.types)}`} ref={popupRef}>
			<div className='popup__container' onClick={(e) => e.stopPropagation()}>
				<div className='popup__header'>
					<button className='popup__back' onClick={onClose}>
						<IoMdArrowBack />
					</button>
					<h2 className='popup__title'> {data.name ? data.name.charAt(0).toUpperCase() + data.name.slice(1) : ''} </h2>
				</div>
				<div className='popup__info'>
					<p className='popup__id'> #{data.id ? `00${data.id}`.slice(-3) : '000'} </p>
					<Button></Button>
				</div>
			</div>
			<div className='popup__stats'>
				<img className='popup__img' src={data.sprites && data.sprites.other['official-artwork'].front_default} alt='pokemon' />
				<div className='popup__types'>
					<Types data={data}></Types>
				</div>
				<div className='about'>
					<h4 className='about__title'> About </h4>
				</div>
				<div className='popup__measurements'>
					<div className='weight'>
						<div className='weight__container'>
							<p className='weight__value'> {data.weight / 10} kg </p>
						</div>
						<p className='weight__title'> Weight </p>
					</div>
					<hr className='popup__divider' />
					<div className='height'>
						<div className='height__container'>

							<p className='height__value'> {data.height / 10} m </p>
						</div>
						<p className='height__title'> Height </p>
					</div>
					<hr className='popup__divider' />
					<div className='moves'>
						<p className='moves__value'> {data.moves && data.moves[0].move.name} </p>
						<p className='moves__title'> Moves </p>
					</div>
				</div>
				<div className='description'>
					<p className='description__text'> {description} </p>
				</div>
				<div className='base__stats'>
					<p className='base__stats__title'> Base Stats </p>
					<div className='stats__container'>
						{data.stats &&
							data.stats.map((stat, index) => (
								<div key={index} className='stat'>
									<span className='label'> {stat.stat.name}</span>
									<span className='value'> {stat.base_stat}</span>
									<div className='bar'>
										<div className={`fill ${getBackgroundClass(data.types)}`} style={{ width: `${stat.base_stat/2}%` }}></div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popup;
