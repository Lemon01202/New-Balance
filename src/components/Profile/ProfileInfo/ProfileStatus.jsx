import React from 'react';
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
	state = { editMode: false, status: this.props.status }
	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status);
	}
	deactivateOnKeydown = (event) => {
		if (event.keyCode === 13) {
			this.setState({
				editMode: false
			})
			this.props.updateStatus(this.state.status);
		}
	}
	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value,
		});
		console.log('OnChange');
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('DidAmount');
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}
	render() {
		return (
			<div className={s.profileStatus}>
				{!this.state.editMode
					? this.props.status
						? <div><span onClick={this.activateEditMode}>{this.props.status}</span></div> : <div><span onClick={this.activateEditMode}>No status</span></div>
					: <div><input ref={this.statusInputRef} autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange}
						onKeyDown={this.deactivateOnKeydown} value={this.state.status} /></div>}
			</div>
		);
	}
}

export default ProfileStatus;