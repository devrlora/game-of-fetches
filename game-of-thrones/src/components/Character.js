import React from 'react';
import axios  from 'axios';


class Character extends React.Component{
    constructor(props){
        super(props)
        this.state={ans1: '',imgUrl:''}
    }
    async componentDidMount(){
        const url= `https://anapioficeandfire.com/api/characters/583`;
        let response = await axios.get(url);
        let data= response.data;
        console.log(data);
        this.setState({ans1: data.name,imgUrl: data.avatar_url})
    }
    render(){
        return (
            <div>
                <h1>question</h1>
                <h1>{this.state.ans1 }</h1>
            </div>
        )
    }
    
}

export default Character;