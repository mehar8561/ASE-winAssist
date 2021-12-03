import React, { Component } from 'react'
import axios from 'axios'
// import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
// import SearchField from "react-search-field";
// import SB from './SearchBar';
// import  dt from './data.json'


const config = {
  headers: {
    accept: 'application/json',
  }
};

const columnsOption1 = [{
  Header: 'Title',
  accessor: 'title',
}
  , {
  Header: 'Year',
  accessor: 'year',
}

  //  ,
  //  {  
  //  Header: 'Score',  
  //  accessor: 'score' ,
  //  }
  , {
  Header: 'Fragment',
  accessor: 'fragment',
}
];
const columnsOption2 = [{
  Header: 'Title',
  accessor: 'title',
}
  , {
  Header: 'Year',
  accessor: 'year',
}

];
const columnsOption3 = [{
  Header: 'Title',
  accessor: 'title',
}
];

class ArtistTable extends Component {



  constructor(props) {
    super(props)
    this.state = {
      users: [],
      // users2: [],
      loading: true,
      inputVal: ' ',
      searchQuery: '',
      searchQuery2: '',
      setSearchQuery3: '',
      columnOptionSelection:columnsOption1
    }
  }
  onSubmit = (e) => {

    this.getUsersData(this.state.searchQuery);
    console.log(this.state.searchQuery)

    e.preventDefault();
    this.setState({
      columnOptionSelection:columnsOption1
    })
  };
  setSearchQuery = (e) => {
    this.setState(
      {
        searchQuery: e,
        searchQuery2: '',
        searchQuery3: ''
      }
    )

  };

  onSubmit2 = (e) => {

    // debugger;
    this.getUsersData2(this.state.searchQuery2);
    console.log(this.state.searchQuery)

    e.preventDefault();
    this.setState({
      columnOptionSelection:columnsOption2
    })

  };
  setSearchQuery2 = (e) => {
    this.setState(
      {
        searchQuery2: e,
        searchQuery: '',
        searchQuery3: ''
      }
    )

  };

  onSubmit3 = (e) => {
    this.getUsersDoc2Vec(this.state.searchQuery3);
    console.log(this.state.searchQuery)

    e.preventDefault();
    this.setState({
      columnOptionSelection:columnsOption3
    })

  };
  setSearchQuery3 = (e) => {
    this.setState(
      {
        searchQuery3: e,
        searchQuery2: '',
        searchQuery: ''
      }
    )

  };



  valChange = (e) => {
    // debugger;
    this.setState(
      {
        inputVal: e.target.value
      }
    )
  }
  async getUsersData(c) {
   
     const resl = await axios.get('https://flaskapp-t-2-lkhdudb43a-uc.a.run.app/doc2vec?query=' + this.state.searchQuery,
      config);
     
      // JSON.stringify(resl)
     

      const res= JSON.stringify(resl);

 


    // const x=dt;
    this.setState({ loading: false, users: resl.data })
    console.log(res.data);
    // debugger;
    // const s=0
  }

  async getUsersData2(c) {
     const resl = await axios.get('https://flaskapp-t-2-lkhdudb43a-uc.a.run.app/classify?query=' + this.state.searchQuery2,
      config);
     
      // JSON.stringify(resl)
     

      const res= JSON.stringify(resl);

 


    // const x=dt;
    this.setState({ loading: false, users: resl.data })
    console.log(res.data);
    debugger;
    // const s=0
  }

  //   componentDidMount(){
  //     this.getUsersData()
  //   }

  componentDidMount() {

    this.getUsersData();
    this.getUsersData2();
    // this.getUsersData2();
    // const { projects, filterProject, onUpdateProjects } = this.props;
    // onUpdateProjects(projects);
  }

  // handleInputChange = (event) => {

  //   const query = event.currentTarget.value;
  //   this.getUsersData(query);
  //   // const { projects, filterProject, onUpdateProjects } = this.props;

  //   // const filteredProjects = projects.filter(project => !query || filterProject(query, project));

  //   // onUpdateProjects(filteredProjects);
  // };



  render() {
    // const columnsOption1 = [{
    //   Header: 'Title',
    //   accessor: 'title',
    // }
    //   , {
    //   Header: 'Year',
    //   accessor: 'year',
    // }

    //   //  ,
    //   //  {  
    //   //  Header: 'Score',  
    //   //  accessor: 'score' ,
    //   //  }
    //   , {
    //   Header: 'Fragment',
    //   accessor: 'fragment',
    // }
    // ];
    // const columnsOption2 = [{
    //   Header: 'Title',
    //   accessor: 'title',
    // }
    //   , {
    //   Header: 'Year',
    //   accessor: 'year',
    // }

    // ];
    // const columnsOption3 = [{
    //   Header: 'Title',
    //   accessor: 'title',
    // }
    // ];
    return (
      <div>
        <form
          action="/"
          method="get"
          autoComplete="on"
          onSubmit={this.onSubmit}
        >

          <input
            value={this.state.searchQuery}
            onInput={(e) => this.setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            // placeholder="Search blog posts"
            name="s"
          />
          <button type="submit">Search Doc2Vec</button>
        </form>
        <form
          action="/"
          method="get"
          autoComplete="on"
          onSubmit={this.onSubmit2}
        >

          <input
            value={this.state.searchQuery2}
            onInput={(e) => this.setSearchQuery2(e.target.value)}
            type="text"
            id="header-search"
            // placeholder="Search blog posts"
            name="s2"
          />
          <button type="submit">Search Classification</button>
        </form>
        {/* <form
          action="/"
          method="get"
          autoComplete="on"
          onSubmit={this.onSubmit3}
        >

          <input
            value={this.state.searchQuery3}
            onInput={(e) => this.setSearchQuery3(e.target.value)}
            type="text"
            id="header-search"
            // placeholder="Search blog posts"
            name="s3"
          />
          <button type="submit">Search Similar pages</button>
        </form> */}


        {/* <SB/> */}
        {/* <form>
        <input onChange={this.handleInputChange} ></input>
       </form> */}
        {/* <label>search bar</label> */}
        {/* <button onClick={shoot}>Take the Shot!</button> */}
        {/* <ReactTable
          data={this.state.users}
          columns={this.state.columnOptionSelection}
        /> */}
       <div><pre>{(this.state.searchQuery!=='' || this.state.searchQuery2!=='') ? JSON.stringify(this.state.users, null, 2) : ''}</pre></div>)
      </div>
    )
  }
}

export default ArtistTable;