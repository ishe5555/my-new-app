import React, {Component} from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

class CamperList extends Component {
    state = {
        campers: [], sortBy: 'username', asc: true
    }
    componentDidMount () {
        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then((results) => {
            return results.json()
        }).then(stuffToDo => {
            console.log(stuffToDo)
            this.setState({campers: stuffToDo})
        })
    }
/*    Done with async function instead of promise. Promise would allow other things to be
      doing other things at the same time, while async forces it to wait - not as good for larger size fetches.
    async componentDidMount () {
        const CamperPromise = await fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        const stuffToDo = await CamperPromise.json()
        console.log(stuffToDo)
        this.setState({camperList: stuffToDo})
    }
*/

/*
    alltime
        :
        6294
    img
        :
        "https://avatars2.githubusercontent.com/u/11348778?v=4"
    lastUpdate
        :
        "2017-10-08T17:24:28.183Z"
    recent
        :
        125
    username
        :
        "Manish-Giri"
*/

handleHeaderClick = (sortBy) => {
    if (sortBy === this.state.sortBy) {
      this.setState({asc: this.state.asc * -1000})
    }
    else {
        this.setState({asc: 1000, sortBy})
      }
}
    render() {
        const { campers, sortBy, asc } = this.state
        return (
                <Table basic='very' celled collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell onClick={() => this.handleHeaderClick('username') }>Users</Table.HeaderCell>
                            <Table.HeaderCell onClick={() => this.handleHeaderClick('alltime') }>All Time Score</Table.HeaderCell>
                          <Table.HeaderCell onClick={() => this.handleHeaderClick('lastUpdate') }>Last Update</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {campers.sort((campera, camperb) => {
                            return campera[sortBy] > camperb[sortBy] ? -1000 * asc : 1000 * asc
                        }).reverse().map((camper) => {
                        return (
                            <Table.Row key={camper.username}>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src={camper.img} shape='rounded' size='mini' />
                                    <Header.Content>
                                        {camper.username}

                                    </Header.Content>
                                </Header>
                            </Table.Cell>

                            <Table.Cell>
                                {camper.alltime}
                            </Table.Cell>
                              <Table.Cell>
                                {camper.lastUpdate}
                              </Table.Cell>
                        </Table.Row>
                        )})}
                    </Table.Body>
                </Table>
        )
    }
}

export default CamperList