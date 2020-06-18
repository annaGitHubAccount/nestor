import React from 'react';
import SkyLight from 'react-skylight';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class EditProduktStammdaten extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            produktStammdatenDTO: this.props.produktStammdatenDTO
        };
    }



    handleChange = (event) => {
        this.setState(
            {[event.target.name]: event.target.value}
        );
    }

    handleSubmit = (event) => {

        event.preventDefault();

        this.refs.addDialog.hide();
    }



    cancelSubmit = (event) => {

        event.preventDefault();
        this.refs.addDialog.hide();
    }


    render() {

        return(

            <div>

                <SkyLight hideOnOverlayClicked ref="addDialog">
                    <h3>Edit Produktstammdaten</h3>
                    <form>
                        <TextField label="Symbol" placeholder="Symbol" name= {this.state.produktStammdatenDTO.symbol} onChange={this.handleChange} /> <br/><br/>
                        <TextField label="Name" placeholder="Name" name= {this.state.produktStammdatenDTO.name} onChange={this.handleChange} /> <br/><br/>
                        <TextField label="Preis" placeholder="Preis" name= {this.state.produktStammdatenDTO.preis} onChange={this.handleChange} /> <br/><br/>
                        <TextField label="IsAktiv" placeholder="IsAktiv" name= {this.state.produktStammdatenDTO.aktiv} onChange={this.handleChange} /> <br/><br/>
                        <TextField label="ProduktArt" placeholder="ProduktArt" name= {this.state.produktStammdatenDTO.produktArt} onChange={this.handleChange} /> <br/><br/>
                        <br/>
                        <Button size="small" variant="outlined" color="primary" style={{'margin': '10px'}} onClick={this.handleSubmit}>Save</Button>
                        <Button size="small" variant="outlined" color="secondary" style={{'margin': '10px'}} onClick={this.cancelSubmit}>Cancel</Button>
                    </form>
                </SkyLight>
            </div>
        );

    }

}

export default EditProduktStammdaten;