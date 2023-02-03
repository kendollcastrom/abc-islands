const openTable = () => {
    
  const btn = document.querySelector('.horse-layout__racebook--button');
	const table = document.querySelector('.horse-layout__open-table');
	
	btn.addEventListener('click', function() {
		table.style.display = 'block';
	});

};

export default openTable;
