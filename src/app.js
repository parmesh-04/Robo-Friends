import React,{Component} from 'react';
import Cardlist from './cardlist';
import Robots from './robots';
import SearchBox from './Searchbox';
import './App.css';
import Scroll from './Scroll';

class App extends Component{
    constructor(){
        super();
        this.state={
            Robots:Robots,
            searchField:'' 
        }
    }

    onsearchChange=(event)=>{
        this.setState({searchField:event.target.value})
       
    }
    render(){
        const filter=this.state.Robots.filter(Robots=>{
            return Robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
           
        })
    return(
        <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
           <SearchBox searchChange={this.onsearchChange}/>
           <Scroll>
           <Cardlist Robots={filter}/>
           </Scroll>
              
        </div>
     
    );
    }
}
export default App;