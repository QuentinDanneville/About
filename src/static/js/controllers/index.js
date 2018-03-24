import Catalog from './catalog';
import Content from './content';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Modal from './modal';

export default function(angular) {
	Catalog(angular);
	Content(angular);
	Step1(angular);
	Step2(angular);
	Step3(angular);
	Step4(angular);
	Modal(angular);
}
