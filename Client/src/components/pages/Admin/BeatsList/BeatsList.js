import React, { Component } from 'react'
import { FormControl, InputGroup, Row } from 'react-bootstrap'
import BeatsService from '../../../../services/beats.service'
import BeatItem from '../BeatItem/BeatItem';

export default class BeatsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beats: null,
            show: false,
            searchValue: ""

        }
        this.beatService = new BeatsService();
    }

    componentDidMount() {
        this.refreshBeats();
    }

    refreshBeats = () => {
        this.beatService.getBeats()
            .then(res => {
                this.setState({
                    ...this.state,
                    beats: res.data
                })
            })
            .catch(err => console.error(err))
    }

    displayBeats = () => {
        // const filteredbeats = this.state.beats.filter(beat => beat.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return (
            this.state.beats.length > 0 ?
                this.state.beats.map((beat, idx) => {
                    return (
                        <BeatItem idx={`a${idx}`} loggedUser={this.props.loggedUser} key={beat._id} {...beat} refreshBeats={this.refreshBeats} />
                    )
                }) :
                <p>Sin resultados</p>
        )
    }



    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    render() {
        return (
            this.state.beats ?

                <div>


                    <InputGroup className="mb-3 mt-4">
                        <FormControl
                            onChange={this.handleChange}
                            name="searchValue"
                            value={this.state.searchValue}
                            placeholder="Search beat..."
                            sans-serif-label="buscar"
                        />
                    </InputGroup>

                    <Row className="mt-4">
                        {
                            this.displayBeats()
                        }
                    </Row>
                </div>
                :
                <h3>Loading...</h3>






        )
    }
}