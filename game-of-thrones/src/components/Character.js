import React from 'react';
import axios  from 'axios';


class Character extends React.Component{
    constructor(props){
        super(props)
        this.state={ans1: '',born:'',ans2:''}
    }
    async componentDidMount(){
        const url= `https://anapioficeandfire.com/api/characters/16`;
        let response = await axios.get(url);
        let data= response.data;
        console.log(data);
        this.setState({ans1: data.name,born: data.born})
    }
    render(){
        return (
            <div>
                <h1>Where was Margaery Tyrell born?</h1>
                {/* <h2>{this.state.ans1}</h2> */}
                <h2>{this.state.born}</h2>
            </div>
        )
    }
    
}

export default Character;