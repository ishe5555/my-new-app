import React, {Component} from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

class CamperList extends Component {
    state = {
        campers: []
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
    render() {
        const { campers } = this.state
        return (
                <Table basic='very' celled collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Employee</Table.HeaderCell>
                            <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {campers.sort((campera, camperb) => {
                            return campera.lastUpdate > camperb.lastUpdate ? -1 : 1
                        }).reverse().map((camper) => {
                        return (
                            <Table.Row key={camper.username}>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src={camper.img} shape='rounded' size='mini' />
                                    <Header.Content>
                                        {camper.username}
                                        <Header.Subheader>Human Resources</Header.Subheader>
                                    </Header.Content>
                                </Header>
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