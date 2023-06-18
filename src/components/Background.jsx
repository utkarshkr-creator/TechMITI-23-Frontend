import { useTheme } from '@material-ui/core'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesConfig";

export const Background = () => {
	const particlesInit = (engine) => {
		loadFull(engine);
	  };
	  return(
		<div style={{height:"100vh"}}>
		<Particles init={particlesInit} options={particlesOptions} />
		</div>
	  )
}
