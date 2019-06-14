import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './style.css';

class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            data: {},
        };

    }

    componentDidMount() {

        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)
        ]).then(([item, description]) => {
            console.log(item, description)
            this.setState({
                data: {
                    ...item.data,
                    description: description.data.plain_text,
                }
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    renderPicture() {
        const { data } = this.state
        return (
            <Fragment>
                <div class="demo-card">
                    <div class="mdl-card__supporting-text">
                        <div className="mdl-grid" style={{ backgroundColor: '#fff', borderRadius: 10 }}>
                            <div className="mdl-cell mdl-cell--6-col mdl-cell--6-col-phone mdl-cell--4-col-tablet" >
                                <p style={{ padding: 10 }}></p>
                                <img style={{ maxWidth: '100%', margin: '0 auto' }} src={this.state.data.pictures[0].url} />
                            </div>
                            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet">
                                <p style={{ padding: 10 }}></p>
                                <p style={{margin: 0}}>#{this.state.data.id}</p>
                                <p style={{margin: 0}}>{this.state.data.sold_quantity} vendidos</p>
                                <h3 style={{color: "#000"}}>{this.state.data.title}</h3>
                                <h3 style={{color: "#000"}}><b>R$ {this.state.data.price}</b></h3>
                                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                                    COMPRAR
                            </button>
                            </div>
                            <div className="mdl-cell mdl-cell--12-col">
                                <h3 style={{color: "#000"}}><b>Descrição</b></h3>
                            </div>
                            <div className="mdl-cell mdl-cell--12-col">
                                <p style={{textAlign: "justify"}}>{this.state.data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>




            </Fragment>
        );

    }

    render() {

        const { data } = this.state;

        if (!Object.keys(data).length) {
            return (
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Carregando</h2>
                </div>
            );
        }

        return (
            this.renderPicture()
        );
    }
}

export default Item;