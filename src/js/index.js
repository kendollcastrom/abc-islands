import {tnsSingle} from './components/tns-slider';
import {topNav} from './components/topNav';
import {tnsCarousell} from './components/tns-carousell';
import {paymentSlider, paymentSliderCasino} from './components/payment-slider';
import {initAcc} from './components/dropdown-sports';
import openTable from './components/openTable';
import {tabs, tabsHorses} from './components/tabs';
//import bankingTabs from './components/banking-tabs';
// import { toggleMenu } from './components/menu-mobile';

(()=>{
    topNav();
		//bankingTabs();
		// toggleMenu();

    if (document.body.classList.contains('Inicio')) {
		tnsSingle();
		tnsCarousell();
		paymentSlider();
		
    }else if (document.body.classList.contains('Casino')) {
		paymentSliderCasino();
    }else if (document.body.classList.contains('Reglas de deportes')) {
		initAcc();
    }else if (document.body.classList.contains('Caballos')) {
			tabsHorses();
			openTable();
			tabs();
		}
})();

