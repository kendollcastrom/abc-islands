import {topNav} from './components/topNav';
import {initAcc} from './components/dropdown-sports';
import openTable from './components/openTable';
// import {tabs, tabsHorses} from './components/tabs';
import bankingTabs from './components/banking-tabs';
import { initMenu } from './components/menu-fixed';
import tabsHorses from './components/horsesTabs';

(()=>{
    topNav();
		//bankingTabs();
		initMenu();

    if (document.body.classList.contains('Home')) {
		
    }else if (document.body.classList.contains('Casino')) {

    }else if (document.body.classList.contains('Sport-rules')) {
		initAcc();
    }else if (document.body.classList.contains('Racebook')) {
			tabsHorses();
			openTable();
			// tabs();
		}else if (document.body.classList.contains('Banking')) {
			bankingTabs();
		}
		
})();

