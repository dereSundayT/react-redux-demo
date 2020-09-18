import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layouts/Preloader";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
	useEffect(() => {
		getLogs();
		//eslint-disable-next-line
	}, []);

	if (loading || logs === null) {
		return <Preloader />;
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className="center">No Logs to Show</p>
			) : (
				logs.map((log) => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	);
};
Logs.propTypes = {
	log: PropTypes.object.isRequired, //ptor
	getLogs: PropTypes.func.isRequired, //ptfr
};
const mapStateToProps = (state) => ({
	log: state.log,
	/*
	// ? the log state.log is comming from logReducers
	// ? the whole state was brought in, you can bring in individual state also 
	@state.log -> the log here is the name used inD index.js of the reducers  
	log: state.log.logs @individual scope
	*/
});
/*
! when ever you want to bring in item from app lvel, you bring it a PROPS
*/
//connect:::takes in two things mapStateToProps
//connect(mapStateToProps, {actions you want to run})
export default connect(mapStateToProps, { getLogs })(Logs);
