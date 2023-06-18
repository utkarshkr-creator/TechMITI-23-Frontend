import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingBox from './LoadingBox';

const Login = () => {
	const navigate = useNavigate();
	const [input, setInput] = useState({email: '', password: ''});
	const [disabled, setDisabled] = useState(true);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	useEffect(() => {
		if(input.email !== '' && input.password !== ''){
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [input])
	const loginHandler = async ()=>{
		try {
			setLoading(true);
			 const {data} = await axios.post('/api/user/create-session', input);
			 console.log(data)
			 localStorage.setItem('userInfo', JSON.stringify(data.data) );
			 setLoading(false);
			navigate('/profile');
		} catch (err) {
			setLoading(false)
			setError(err?.response?.data?.data?.message);
			console.log(err)
			
		}
	}
	return (
		<div className='login'>


			<div class="section">
				<div class="container">
					<div class="row full-height justify-content-center">
						<div class="col-12 text-center align-self-center py-5">
							<div class="section pb-5 pt-5 pt-sm-2 text-center">
								<label for="reg-log"></label>
								<div class="card-3d-wrap mx-auto">
									<div class="card-3d-wrapper">
										{loading ? <LoadingBox></LoadingBox> :
										<div class="card-front">
											<div class="center-wrap">
												<div class="section text-center">
													<h4 class="mb-4 pb-3">Log In</h4>
													<div class="form-group">
														<input type="email" name="email" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" required={true} onChange={(e) => setInput({...input, email: e.target.value})}/>
														<i class="input-icon uil uil-at"></i>
													</div>
													<div class="form-group mt-2">
														<input type="password" name="password" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" required={true} onChange={(e) => setInput({...input, password: e.target.value})} />
														<i class="input-icon uil uil-lock-alt"></i>
													</div>
													<button  class="btn mt-4" onClick={loginHandler} disabled={disabled}>
														<span></span>
														<span></span>
														<span></span>
														<span></span>
														Log In
													</button>
													{error && <p class="mb-0 mt-4 text-center">{error}</p>}
													{/* <a href="#" class="btn mt-4">submit</a> */}
													{/* <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p> */}
												</div>
											</div>
										</div> }
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login