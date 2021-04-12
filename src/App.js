import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { InputBox } from './components/search-box/search-box.component';
import './App.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            increment: this.props.increment,
            monsters: [
            ],

            searchString: '',

        }

        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))

    }

    //Note 1 ===> We no Nedd to Bind If we use Bellow Patten to Declate Method Becuase Normal Method has their own this
    handleChange = (e) => {
        var value = e.target.value;
        //        console.log(this.props.increment);
        this.setState((prevState, prevProps) => {
            return { searchString: prevState + value }
        },
            () => {
                console.log(this.state.searchString)
            }
        );
    }

    //Note 2 ===>We Should Bind If we use Bellow Patten to Declate Method Becuase Normal Method has their own this
    // handleChange(e) {
    //     this.setState({ searchString: e.target.value });
    //     console.log(this.state.searchString);
    // }


    render() {

        const { monsters, searchString } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchString.toLocaleLowerCase())
        );

        return (
            <div className='App'>
                <h1> Monsters Rolodex</h1>
                <InputBox placeHolder="Enter Text to Search" handleChange={this.handleChange} />
                <CardList monsters={filteredMonsters} />
            </div>

        );
    }
}
export default App;


//jsonplaceholder.typicode.com