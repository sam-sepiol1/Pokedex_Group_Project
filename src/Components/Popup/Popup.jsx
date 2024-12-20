/* eslint-disable react/prop-types */
import { IoMdArrowBack } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { fetchPokemonDetails } from '../Card/api';
import Button from '../Button/Button';
import './_popup.scss';
import weightImage from '../../images/weight.png';
import heightImage from '../../images/height.png';
import Types from '../Types/Types';

const Popup = ({id, onClose }) => {
	const [data, setData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetchPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`);
			setData(result);
		};
		fetchData();
	}, [id]);

	const getBackgroundClass = (types) => {
		if (!types || types.length === 0) return '';
		return types[0].type.name; // Utilisez le premier type pour définir la classe
	  };

	return (
		<div className={`allInfo ${getBackgroundClass(data.types)}`} onClick={onClose} >
			<div className='popup' >
				<div className='popup__container'  onClick={(e) => e.stopPropagation()}>
					<div className='popup__header'>
						<button className='popup__back' onClick={onClose}>
							<IoMdArrowBack />
						</button>
						<h2 className='popup__title'> {data.name ? data.name.charAt(0).toUpperCase() + data.name.slice(1) : ''} </h2>
					</div>
					<div className='popup__info'>
						<p className='popup__id'> #{data.id ? `00${data.id}`.slice(-3) : '000'}  </p>
						<Button></Button>
					</div>
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
							<img src={weightImage} alt='weight' />
							<p className='weight__value'> {data.weight / 10} kg </p>
						</div>
						<p className='weight__title'> Weight </p>
					</div>
					<hr className='popup__divider' />
					<div className='height'>
						<div className='height__container'>
							<img src={heightImage} alt='height' />
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
					<p className='description__text'> There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger. </p>
				</div>
				<div className='base__stats'>
					<p className='base__stats__title'> Base Stats </p>
					<div className='stats__container'>
						{data.stats &&
							data.stats.map((stat, index) => (
								<div key={index}>
									<p className='stats__name'>
										{' '}
										{stat.stat.name} : {stat.base_stat}{' '}
									</p>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popup;