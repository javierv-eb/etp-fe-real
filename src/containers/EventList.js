import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import EventCard from 'eventbrite_design_system/eventCard/EventCard';
import EmptyState from 'eventbrite_design_system/emptyState/EmptyState';

import 'eventbrite_design_system/css/eds.css';

const isPaid = ({
    'is_free': isFree,
    'minimum_ticket_price': ticketPrice,
    'is_sold_out': hasMoreTickets,
}) => isFree ? 'Free' : hasMoreTickets ? 'Sold Out' : ticketPrice.display;

const getLocationInfo = ({'primary_venue_with_places': venue}) => venue ? venue.address['localized_area_display'] : 'Online';

export default class EventList extends PureComponent {
    static propTypes = {
        onFetchEvents: PropTypes.func.isRequired,
        searchValue: PropTypes.string,
        formError: PropTypes.string,
    }

    componentDidMount() {
        this.props.onFetchEvents();
    }
    _handleClick = (eventId, event) => {
        const {
            searchEventDetail = () => ({}),
        } = this.props;

        searchEventDetail(eventId);
        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        const {
            events,
            searchValue,
            formError,
        } = this.props;

        let mediaCard;

        if (events && events.events && events.events.length > 0) {
            mediaCard = events.events.map((event) => (
                <EventCard
                    key={event.id}
                    id={event.id}
                    minPrice={{
                        currency: "USD",
                        currencyFormat: "¤#,##0.00",
                        minPriceValue: 250
                    }}
                    imageUrl={event.image ? event.image.original.url : null}
                    edgeColor="#b18f7f"
                    locationInfo={getLocationInfo(event)}
                    startTime={event.start_time}
                    startDate={event.start_date}
                    isFree={event['ticket_availability']['is_free']}
                    ticketsBy="Eventbrite"
                    name={event.name}
                    shareOptions={{}}
                    url={event.tickets_url}
                    style="standard"
                    type="list"
                    imageStyle="fixed"
                    isNoFollow={false}
                    onClick={this._handleClick.bind(null, event.id)}
                />  
            ));
        } else {
            const primaryText = `No events matched ${searchValue}`;

            mediaCard = (
                <EmptyState
                    graphicType="orders-empty"
                    title="No Events found"
                    description=""
                    primaryText={primaryText}
                />
            );
        }

        if (formError) {
            mediaCard = (
                <EmptyState
                    graphicType="ghost"
                    title="Error"
                    description=""
                    primaryText={formError}
                />
            );
        }

        return (
            <section className="eds-g-cell-1-1 list-card">                
                <div style={{width: '80%'}}>
                    {mediaCard}                             
                </div>
            </section>
        );
    }
}
