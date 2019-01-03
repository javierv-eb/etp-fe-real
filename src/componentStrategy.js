import connectPageStructure from './containers/ConnectPageStructure';
import ConnectEventList from './containers/ConnectEventList';
import EventList from './containers/EventList';
import PageStructure from './containers/PageStructure';

export const configureEventList = () => (
    connectPageStructure(
        PageStructure,
        {
            title: 'Dynamic Event List',
            mainContent: ConnectEventList(EventList)
        }
    )
)