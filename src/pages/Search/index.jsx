import React, { Component, Fragment } from 'react';
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

            <div key={item.id} className="mdl-card mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-shadow--2dp">
                <div className="img-thumb">
                    <div className="mdl-card__text">
                        <p><img src={item.thumbnail} /></p>
                    </div>
                    <div className="mdl-card__supporting-text">
                    <p> {item.title}</p>
                        <p>
                            <Link to={`item/${item.id}`}>
                                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                    Abrir
                            </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>


        )
    }

    render() {
        const { results } = this.state

        console.log(results);

        return (
            <Fragment>
                <div>
                    <input type="text" onChange={this.onSearch} placeholder="Buscar produtos, marcas e muito mais…"></input>
                </div>
                <div className="mdl-grid">
                    {this.state.results.map(this.renderProduct)}
                </div>

            </Fragment>
        );
    }
}

export default Search;