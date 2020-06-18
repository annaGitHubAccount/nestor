import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import AddProduktStammdaten from "./AddProduktStammdaten";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditProduktStammdaten from "./EditProduktStammdaten";

class ProduktStammdatenList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            produktStammdatenDTOList: [],

            produktStammdatenDTO: {
                id: '',
                symbol: '',
                name: '',
                preis: '',
                aktiv: '',
                produktArt: ''
            }
        };
    }




    componentDidMount() {
        this.getProduktStammdatenList();
    }

    getProduktStammdatenList = () => {

        axios.get('http://localhost:8081/produktstammdaten', {responseType: 'json'})

            .then((produktStammdatenListResponse) => {

                this.setState({
                    produktStammdatenDTOList: produktStammdatenListResponse.data.produktStammdatenDTOList
                });

            }, (error) => {
                console.log(error);
            })
    }

    addProduktStammdaten = (produktStammdaten) => {

        axios.post('http://localhost:8081/addproduktstammdaten', produktStammdaten)
            .then(() => this.getProduktStammdatenList())
            .catch(error => console.log(error))
    }

    onDeleteClick = (id) => {

        axios.delete('http://localhost:8081/deleteproduktstammdaten/' + id)

            .then( produktStammdatenServiceResponse => {

                if (produktStammdatenServiceResponse.data.ok) {
                    this.getProduktStammdatenList()
                }else {
                    console.log(produktStammdatenServiceResponse.data.error)
                }
            })
            .catch(error => console.log(error))
    }

    onEditClick = (id) => {

        let newProduktStammdatenDTOList = this.state.produktStammdatenDTOList.map((produktStammdatenIter) => {
            if (id === produktStammdatenIter.id) {

                    this.setState({
                        produktStammdatenDTO: {
                            id: produktStammdatenIter.id,
                            symbol: produktStammdatenIter.symbol,
                            name: produktStammdatenIter.name,
                            preis: produktStammdatenIter.preis,
                            aktiv: produktStammdatenIter.aktiv,
                            produktArt: produktStammdatenIter.produktArt
                        }
                    });
                }
            return produktStammdatenIter;

        });

    }


    render() {

        const columns = [
            {
                Header: 'Name',
                accessor: 'name',
                width: 250
            },
            {
                Header: 'Preis',
                accessor: 'preis',
                width: 250
            },
            {
                Header: 'Symbol',
                accessor: 'symbol',
                width: 250
            },
            {
                Header: 'IsAktiv',
                accessor: 'aktivStr',
                width: 250
            },
            {
                Header: 'Produkt Art',
                accessor: 'produktArtStr',
                width: 250
            },
            {
                sortable: false,
                filterable: false,
                width: 250,
                accessor: 'id',
                Cell: ({value}) => (<Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        this.onEditClick(value)
                    }}>
                    Edit</Button>)
            },
            {
                sortable: false,
                filterable: false,
                width: 250,
                accessor: 'id',
                Cell: ({value}) => (<Button
                    startIcon={<DeleteIcon/>}
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        this.onDeleteClick(value)
                    }}>
                    Delete</Button>)
            }
        ]

        return (

            <div>
                <AddProduktStammdaten
                    addProduktStammdaten={this.addProduktStammdaten}
                />
                <EditProduktStammdaten
                />
                <ReactTable
                    data={this.state.produktStammdatenDTOList}
                    columns={columns}
                    filterable={true}
                    sortable={true}
                    defaultPageSize={10}
                />
            </div>
        );
    }
}

export default ProduktStammdatenList;