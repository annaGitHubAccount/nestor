import React from 'react';
import SkyLight from 'react-skylight';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

class AddProduktStammdaten extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            id: '',
            symbol: '',
            name: '',
            preis: '',
            aktiv: '',
            produktArt: ''
        };
    }

    clearState = () => {
        this.setState(
            {
                id: '',
                symbol: '',
                name: '',
                preis: '',
                aktiv: '',
                produktArt: ''
            }
        );
    }

    handleChange = (event) => {
        this.setState(
            {[event.target.name]: event.target.value}
        );
    }

    handleSubmit = (event) => {

        event.preventDefault();

        let newProduktStammdaten = {id: this.state.id,
                                    symbol: this.state.symbol,
                                    name: this.state.name,
                                    preis: this.state.preis,
                                    aktiv: this.state.aktiv,
                                    produktArt: this.state.produktArt};

        this.addProduktStammdaten(newProduktStammdaten);
        this.refs.addDialog.hide();
    }

    cancelSubmit = (event) => {

        event.preventDefault();
        this.refs.addDialog.hide();
    }

    addProduktStammdaten = (produktStammdaten) => {

        axios.post('http://localhost:8081/addproduktstammdaten', produktStammdaten)
            .then(() => this.props.fetchProdStammList())
            .catch(error => console.log(error))
    }



    render() {

        return(

            <div>
                <div>
                    <Button size={"small"}
                            variant={"contained"}
                            color={"primary"}
                            style={{'margin': '20px'}}
                            onClick={
                                () => {this.clearState();
                                this.refs.addDialog.show()} }>
                        Add Produktstammdaten</Button>
                </div>

                <SkyLight hideOnOverlayClicked ref="addDialog">
                    <h3>Add Produktstammdaten</h3>
                    <form>
                        <TextField label="Symbol" placeholder="Symbol" name="symbol" value={this.state.symbol} onChange={this.handleChange} /> <br/><br/>
                        <TextField label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} /> <br/><br/>
                        <TextField label="Preis" placeholder="Preis" name="preis" value={this.state.preis} onChange={this.handleChange} /> <br/><br/>
                        <TextField label="IsAktiv" placeholder="IsAktiv" name="aktiv" value={this.state.aktiv} onChange={this.handleChange} /> <br/><br/>
                        <TextField label="ProduktArt" placeholder="ProduktArt" name="produktArt" value={this.state.produktArt} onChange={this.handleChange} /> <br/><br/>
                        <br/>
                        <Button size="small" variant="outlined" color="primary" style={{'margin': '10px'}} onClick={this.handleSubmit}>Save</Button>
                        <Button size="small" variant="outlined" color="secondary" style={{'margin': '10px'}} onClick={this.cancelSubmit}>Cancel</Button>
                    </form>
                </SkyLight>
            </div>
        );

    }

}

export default AddProduktStammdaten;