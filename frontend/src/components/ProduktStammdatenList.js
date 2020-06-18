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
                Cell: ({value}) => (<EditProduktStammdaten
                                        produktStammdatenId = {value}
                                        produktStammdatenDTOList = {this.state.produktStammdatenDTOList}
                                        fetchProdStammList={this.getProduktStammdatenList}
                                    />)
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
                    fetchProdStammList={this.getProduktStammdatenList}
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