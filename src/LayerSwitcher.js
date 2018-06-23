import React from 'react'
import {Toggle} from '@carto/airship'


const categories = {
'corruption':{
	active:true
},
'burglary':{
	active:true
},
'robbery':{
	active:true
},
'vandalism':{
	active:true
},
'drugUse':{
	active:true
}}

class LayerSwitcher extends React.Component{
	constructor(props){
		super(props)
		this.state = {categories:{...categories}}
	}
	onCategoryToggle = category =>{
		this.setState({categories:{
			...this.state.categories,
			[category]:{active:!this.state.categories[category].active}
		}})
	}
	render(){

		const {categories} = this.state
		return (
			<div
      style={{
        position: 'absolute',
        zIndex: 10,
        display: 'flex',
        flexDirection:'column',
        boxShadow: '0px 0px 10px #9ecaed',
        border: '3px solid #9ecaed',
        borderRadius: 5,
        top: 10,
        left: 10,
        bottom: 'auto',
        right: 'auto',
        background: '#fff',
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 10,
}}>

{Object.keys(categories).map(category=>{
	return <Toggle htmlFor={category} onChange={this.onCategoryToggle.bind(this,category)} checked={categories[category].active} key={category}>{category}</Toggle>
})}


</div>
			)
	}
}

export default LayerSwitcher