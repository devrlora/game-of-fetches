import React from 'react';
import axios  from 'axios';


class Character extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    async componentDidMount(){
        const urlChar= `https://anapioficeandfire.com/api/characters/${this.props.query}`;
        const urlHouse= `https://anapioficeandfire.com/api/houses/${this.props.query}`;
        // const urlRegion= `https://anapioficeandfire.com/api/characters/${this.props.query}`;
        
        let response = await axios.get(urlChar);
        let data= response.data;
        console.log(data);
        this.setState({ans1: data.name,born1: data.born, aliases1: data.aliases[1]})
    }
    render(){
        return (
            <div>
                <h2>{this.state.ans1}</h2>
                <h3>{this.state.born1}</h3>
                <h3>{this.state.aliases1}</h3>
            </div>
        )
    }
    
}

export default Character;