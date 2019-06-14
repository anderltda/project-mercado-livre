import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Search extends Component {

    constructor() {
        super();
        this.onSearch = this.onSearch.bind(this);
        this.state = {
            results: [],
        };
    }

    onSearch(event) {
        const value = event.currentTarget.value;
        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({ data }) => {
                this.setState({
                    results: data.results,
                });
            })
    }

    renderProduct(item) {
        return (
            <div key={item.id} className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand">
                    <h2 className="mdl-card__title-text center">
                        <img src={item.thumbnail}></img>
                    </h2>
                </div>
                <div className="mdl-card__supporting-text">
                    {item.title}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link to={`/item/${item.id}`}>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                            Abrir
                    </button>
                    </Link>
                </div>
            </div>


        )
    }

    render() {
        const { results } = this.state

        console.log(results);

        return (
            <div>
                <input type="text" onChange={this.onSearch} placeholder="Buscar produtos, marcas e muito mais…"></input>
                <ul>
                    {this.state.results.map(this.renderProduct)}
                </ul>
            </div>
        );
    }
}

export default Search;