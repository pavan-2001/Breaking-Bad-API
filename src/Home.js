import React from 'react';
import CharacterList from './Components/characterList';
import {ListOfAllCharacters, NameBasedSearch} from './Components/api';
import "@material-tailwind/react/tailwind.css";
import Layout from './Components/layout';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      characterArray : [], 
      searchText : "", 
      singleObject : {}
    };
    this.onChangeSearchText = this.onChangeSearchText.bind(this);
  }

  

  componentDidMount() {
    ListOfAllCharacters().then( (response) => {
      this.setState({characterArray : response});
    }).catch((error) => {
      console.log(error);
    });
  }

  onChangeSearchText(e) {
    const searchText = e.target.value;
    this.setState({searchText});
    if(searchText === "") {
      ListOfAllCharacters().then( (response) => {
        this.setState({characterArray : response});
      }).catch((error) => {
        console.log(error);
      });
    } else {
    const temp = this.state.searchText.replace(/\s/g,'+');
    NameBasedSearch(temp).then((response) => {
      this.setState({characterArray : response})
    }).catch((error) => {
      console.log(error);
    });
    }
  }

  render() {
    return (
      <div>
        <Layout searchText={this.state.searchText} onChangeSearchText={this.onChangeSearchText}/>
        <React.Fragment>
        <CssBaseline/>
          <Container maxWidth="lg">
            {
              this.state.characterArray.length ? 
              <CharacterList characterArray={this.state.characterArray}/> : <div className="text-lg font-bold ">Refresh your page or invalid character name</div>
            }
          </Container>
        </React.Fragment>
      </div>
    );
  }

}
