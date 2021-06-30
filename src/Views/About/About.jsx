import './About.css'
import axios from 'axios'
import { useEffect, useState} from 'react'


const URL = 'https://official-joke-api.appspot.com/random_joke';

const About = () => {

	const [joke, setJoke] = useState('')
	const [punchline, setPunchline] = useState('')

	useEffect(() => {

		let mounted = true;

		const fetchData = async () => {
			const result = await axios(URL)

			if (mounted) {
				setJoke(result.data.setup)
				setPunchline(result.data.punchline)
			}


		}
		fetchData()
		return () => {
			mounted = false;
		}
	}, [])


	return (
		<div className="about-us">
			<h2 className="hireUs"> Hire Us! :) </h2>
			<p className="best-duo">Carl & Christos</p>
			<h3 className="joke">{joke}</h3>
			<p className="punchline">{punchline}</p>

		</div>
	)
}

export default About




