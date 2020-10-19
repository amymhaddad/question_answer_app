import React from 'react';
import TextInput from '../common/TextInput';
import SubmitForm from '../common/SubmitForm';
import DropDown from '../common/DropDown';

function ManageQuestionsForm(props) {
	const { answer, distractors, limit, id } = props.data;

	return (
		<form onSubmit={props.onSubmit}>
			<div>
				<TextInput
					id="distractors"
					label="Filter by distractors: "
					name="distractors"
					value={distractors}
					onChange={props.onChange}
				/>

				<SubmitForm value="Filter Now!" onClick={props.onSubmit} />
			</div>

			<div>
				<DropDown
					label="Sort by answer: "
					id="answer"
					name="answer"
					onChange={props.onChange}
					selectValue={answer}
					value1="asc"
					value2="desc"
				/>

				<SubmitForm value="Sort" onClick={props.onSubmit} />
			</div>

			<div>
				<DropDown
					label="Sort by id: "
					id="id"
					name="id"
					onChange={props.onChange}
					selectValue={id}
					value1="asc"
					value2="desc"
				/>

				<SubmitForm value="Sort" onClick={props.onSubmit} />
			</div>

			<div>
				<TextInput id="limit" label="Limit results: " name="limit" value={limit} onChange={props.onChange} />

				<SubmitForm value="Limit" onClick={props.onSubmit} />
			</div>
		</form>
	);
}

export default ManageQuestionsForm;
