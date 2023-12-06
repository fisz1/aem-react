import React, { useEffect } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

export const DataArtEditConfig = {
    emptyLabel: 'DataArt',
    isEmpty: function(props) {
        return !props || !props.message || props.message.trim().length < 1;
    }
};

/* export default class DataArt extends Component {

    render() {
        if (DataArtEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div className="DataArt">
                <h2 className="DataArt__message">{this.props.message}</h2>
            </div>
        );
    }
} */


const DataArt = ({ message }) => {
    useEffect(() => {
        console.log('DataArt component mounted');
    }, []);

    return (
        <div className="DataArt">
            <h2 className="DataArt__message">{message}</h2>
        </div>
    );
}

MapTo('wknd-spa-react/components/dataart')(DataArt, DataArtEditConfig);
