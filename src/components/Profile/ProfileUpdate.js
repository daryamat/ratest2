import React, { Component } from 'react';


class ProfileUpdate extends Component {
	
   render(){
   	return (
   		<div className="container profile-update ">
   			<div className="blue ">
   				<div className="container-4">
   					<div className="row">
   						<h1>Your Profile</h1>
   					</div>
   				</div>
   			</div>
   			<div className="container-2">
   				<div className="row">
		   			<form className="frm">
				        <label>First name<span>*</span>
				          <input type="text" placeholder="First name" />
				        </label>
				        <label>Last Name<span>*</span>
				          <input type="text" placeholder="Last Name" />
				        </label>
				        <label>CHN<span>*</span>
				          <input type="text" placeholder="CHN" />
				        </label>
				        <fieldset className="large-6 cell">
						    <legend>Team<span>*</span></legend>
						    <p><input className="rd-input" type="radio" name="pokemon" value="Red" id="pokemonRed" required /><label htmlFor="pokemonRed">Street Medicine</label></p>
						    <p><input className="rd-input" type="radio" name="pokemon" value="Blue" id="pokemonBlue" /><label htmlFor="pokemonBlue">Shelter Health</label></p>
						</fieldset>
						<fieldset className="large-6 cell">
						    <legend>Roli<span>*</span></legend>
						    <p><input className="rd-input" type="radio" name="pokemon" value="Red" id="pokemonRed" required /><label htmlFor="pokemonRed">RN</label></p>
						    <p><input className="rd-input" type="radio" name="pokemon" value="Blue" id="pokemonBlue" />
						    <label htmlFor="pokemonBlue">MD/NP</label></p>
						    <p><input className="rd-input" type="radio" name="pokemon" value="Red" id="pokemonRed"  />
						    <label htmlFor="pokemonRed">HW</label></p>
						    <p><input className="rd-input" type="radio" name="pokemon" value="Blue" id="pokemonBlue" />
						    <label htmlFor="pokemonBlue">BH Spec</label></p>
						    <p><input className="rd-input" type="radio" name="pokemon" value="Red" id="pokemonRed"  />
						     <label htmlFor="pokemonRed">PSS</label></p>
						    <p><input className="rd-input" type="radio" name="pokemon" value="Blue" id="pokemonBlue" />
						    <label htmlFor="pokemonBlue">Other</label></p>
						</fieldset>
						<fieldset >
						    <legend>Check these out<span>*</span></legend>
						    <p><input id="checkbox1" type="checkbox" /><label htmlFor="checkbox1">6th St HR Center</label></p>
						    <p><input id="checkbox2" type="checkbox" /><label htmlFor="checkbox2">A Woman's Place Drop-in
							</label></p>
						    <p><input id="checkbox3" type="checkbox" /><label htmlFor="checkbox3">Episcopal or Sanctuary
						    </label></p>
						    <p><input id="checkbox3" type="checkbox" /><label htmlFor="checkbox3">HOSPITAL OR SNF</label></p>
						    <p><input id="checkbox3" type="checkbox" /><label htmlFor="checkbox3">Episcopal or Sanctuary</label></p>
						</fieldset>
						<p className="text-center">
							<button type="button" className="button success-button">Save Changes</button>
						</p>
					</form>
				</div>
			</div>
		</div>
   	  );
     }
   }

 export default ProfileUpdate;
