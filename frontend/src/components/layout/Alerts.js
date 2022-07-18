import {connect} from "react-redux";
import propTypes from 'prop-types';

const Alerts = ({alerts}) =>{
    return(
        <>
            {alerts.map(alert => (
                <div key={alert.id} className={`alert alert-${alert.alertType}`}>
                    {alert.msg}
                </div>
            ))}
        </>
    )
}

Alerts.propTypes = {
    alerts: propTypes.array.isRequired
};


const mapStateToProps = state =>({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alerts);