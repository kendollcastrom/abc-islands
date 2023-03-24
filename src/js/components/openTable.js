const openTable = () => {
	const btn = document.querySelector(".horse-layout__racebook--button");
	const table = document.querySelector(".horse-layout__open-table");

	btn.addEventListener("click", function () {
		if (table.style.display === "none") {
			table.style.display = "block";
		} else {
			table.style.display = "none";
		}
	});
};

export default openTable;
