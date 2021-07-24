import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Movies.css';




class Movies extends React.Component {
    render() {
        return (
            < >

                {this.props.newMoviesArray.map(item => {
                    return (
                        <Card style={{ width: '18rem' }} className='movieCard'>
                            <Card.Img variant="top" src={item.image_url} />
                            <Card.Body>
                                <Card.Title> {item.title}</Card.Title>
                                <Card.Text>
                                   <p>Overview: </p> 
                                   <p>{item.overview}</p>
                                   <p> Average votes:{item.average_votes}</p>
                                    <p>Total_votes: {item.total_votes}</p>
                                   <p> Popularity: {item.popularity}</p>
                                   <p> Released_on: {item.released_on}</p>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                       
                    )
                }
                )}


            </>
        )
    }
}

export default Movies;