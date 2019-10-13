const onInputChange = (e) => {
	e.persist();
	const validate = e.target.value.trim();

	if (validate === '') {
		e.target.value = validate;
	}
};

export default onInputChange;