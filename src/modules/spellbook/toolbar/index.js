import template from './template.html';
import controller from './controller.js';

export default function toolbar() {
	return {
		scope: {},
		controller: controller,
		controllerAs: 'toolbarCtrl',
		bindToController: true,
		template: template,
	};
}
