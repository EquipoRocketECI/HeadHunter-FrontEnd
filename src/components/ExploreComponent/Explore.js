import React from 'react';

import { Item } from './Item.js';

import './css/Explore.css';
import { MemoryRouter, Route, Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { AppBar, Typography } from '@material-ui/core';
import { Filters } from '../FiltersComponent/Filters.js';

const stubPages = [[{ name: "idea 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" }
], [{ name: "idea 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" }
], [{ name: "idea 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" }
], [{ name: "idea 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" }
], [{ name: "idea 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" }
]];

export class Explore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: stubPages[0],
            page: 1,
            currentSearch: "",
            selectedFilters:{}
        }

        this.handlePageChange = this.handlePageChange.bind(this);
        this.getSelectedFilters = this.getSelectedFilters.bind(this);
    }

    handlePageChange(event, newPage) {
        this.setState({
            page: newPage
        }, this.getPageData);

    }

    getPageData() {
        //mirar que filtros están seleccionados
        //de acuerdo con eso invocar métodos adecuados para buscar en el backend
        //armar arreglo de items con la info obtenida.
        //fijar estado --> como aparece abajo.
        

        //Eventualmente cargará datos del backend
        this.setState({
            items: stubPages[this.state.page - 1],
            totalPages: stubPages.length
        })
    }

    //gets filter component state and calls search methods accordingly
    getSelectedFilters(selectedFilters){
        console.log(selectedFilters);
    }

    searchByTitle(title) {
        return (<h1>IN CONSTRUCTION</h1>); //crear servicios en backend -> debe mapear a un json de la forma name: <nombre>, description: <desc>, image:<ruta imagen>}
    }

    searchByInvestmentRange(lowRange, highRange) {
        return (<h1>IN CONSTRUCTION</h1>); //crear servicios en backend -> debe mapear a un json de la forma name: <nombre>, description: <desc>, image:<ruta imagen>}
    }

    searchByInvestor(investorName) {
        return (<h1>IN CONSTRUCTION</h1>); //crear servicios en backend -> debe mapear a un json de la forma name: <nombre>, description: <desc>, image:<ruta imagen>}
    }

    searchByArea(area) {
        return (<h1>IN CONSTRUCTION</h1>);//crear servicios en backend -> debe mapear a un json de la forma name: <nombre>, description: <desc>, image:<ruta imagen>} 
    }

    render() {
        const itemList = this.state.items.map((item, i) => {
            return (<Item
                key={i}
                image={item.image}
                name={item.name}
                description={item.description}
            />);

        });

        return (
            <div className="mainView">
                <Filters getSelectedFilters={this.getSelectedFilters}/>
                <div className="searchResults">
                    <div className="itemArea">
                        {itemList}
                    </div>
                    <MemoryRouter initialEntries={['/explore']} initialIndex={0}>
                        <Route>
                            {({ location }) => {
                                const query = new URLSearchParams(location.search);
                                const page = parseInt(query.get('page') || '1', 10);
                                return (
                                    <Pagination
                                        page={page}
                                        count={this.state.totalPages}
                                        renderItem={(item) => (
                                            <PaginationItem
                                                component={Link}
                                                to={`/explore${item.page === 1 ? '' : `?page=${item.page}`}`}
                                                {...item}
                                            //TODO: 
                                            //     -Dividir conjunto de tarjetas en subconjuntos para c/pagina
                                            //
                                            />
                                        )}
                                        onChange={this.handlePageChange}
                                    />

                                );
                            }}
                        </Route>
                    </MemoryRouter>
                </div>

            </div>
        );
    }

}