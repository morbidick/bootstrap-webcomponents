import {unsafeCSS} from 'lit-element';

export const primary = {
	selector: unsafeCSS`[theme~="primary"]`,
	color: unsafeCSS`var(--bs-primary-color, #007bff)`,
	focusring: unsafeCSS`var(--bs-primary-focusring-color, #007bff50)`,
	hoverbg: unsafeCSS`var(--bs-primary-hover-background-color, #0069d9)`,
	contrast: unsafeCSS`var(--bs-primary-contrast-color, #fff)`,
	alertcolor: unsafeCSS`var(--bs-primary-alert-color, #004085)`,
	alertbg: unsafeCSS`var(--bs-primary-alert-background-color, #cce5ff)`,
	alertborder: unsafeCSS`var(--bs-primary-alert-border-color, #b8daff)`,
	alertlinkcolor: unsafeCSS`var(--bs-primary-alert-link-color, #002752)`,

}
export const secondary = {
	selector: unsafeCSS`[theme~="secondary"]`,
	color: unsafeCSS`var(--bs-secondary-color, #6c757d)`,
	focusring: unsafeCSS`var(--bs-secondary-focusring-color, #6c757d50)`,
	hoverbg: unsafeCSS`var(--bs-secondary-hover-background-color, #5a6268)`,
	contrast: unsafeCSS`var(--bs-secondary-contrast-color, #fff)`,
	alertcolor: unsafeCSS`var(--bs-secondary-alert-color, #383d41)`,
	alertbg: unsafeCSS`var(--bs-secondary-alert-background-color, #e2e3e5)`,
	alertborder: unsafeCSS`var(--bs-secondary-alert-border-color, #d6d8db)`,
	alertlinkcolor: unsafeCSS`var(--bs-secondary-alert-link-color, #202326)`,
}
export const success = {
	selector: unsafeCSS`[theme~="success"]`,
	color: unsafeCSS`var(--bs-success-color, #28a745)`,
	focusring: unsafeCSS`var(--bs-success-focusring-color, #28a74550)`,
	hoverbg: unsafeCSS`var(--bs-success-hover-background-color, #218838)`,
	contrast: unsafeCSS`var(--bs-success-contrast-color, #fff)`,
	alertcolor: unsafeCSS`var(--bs-success-alert-color, #155724)`,
	alertbg: unsafeCSS`var(--bs-success-alert-background-color, #d4edda)`,
	alertborder: unsafeCSS`var(--bs-success-alert-border-color, #c3e6cb)`,
	alertlinkcolor: unsafeCSS`var(--bs-success-alert-link-color, #0b2e13)`,
}
export const danger = {
	selector: unsafeCSS`[theme~="danger"]`,
	color: unsafeCSS`var(--bs-danger-color, #dc3545)`,
	focusring: unsafeCSS`var(--bs-danger-focusring-color, #dc354550)`,
	hoverbg: unsafeCSS`var(--bs-danger-hover-background-color, #c82333)`,
	contrast: unsafeCSS`var(--bs-danger-contrast-color, #fff)`,
	alertcolor: unsafeCSS`var(--bs-danger-alert-color, #721c24)`,
	alertbg: unsafeCSS`var(--bs-danger-alert-background-color, #f8d7da)`,
	alertborder: unsafeCSS`var(--bs-danger-alert-border-color, #f5c6cb)`,
	alertlinkcolor: unsafeCSS`var(--bs-danger-alert-link-color, #491217)`,
}
export const warning = {
	selector: unsafeCSS`[theme~="warning"]`,
	color: unsafeCSS`var(--bs-warning-color, #ffc107)`,
	focusring: unsafeCSS`var(--bs-warning-focusring-color, #ffc10750)`,
	hoverbg: unsafeCSS`var(--bs-warning-hover-background-color, #e0a800)`,
	contrast: unsafeCSS`var(--bs-warning-contrast-color, #212529)`,
	alertcolor: unsafeCSS`var(--bs-warning-alert-color, #856404)`,
	alertbg: unsafeCSS`var(--bs-warning-alert-background-color, #fff3cd)`,
	alertborder: unsafeCSS`var(--bs-warning-alert-border-color, #ffeeba)`,
	alertlinkcolor: unsafeCSS`var(--bs-warning-alert-link-color, #533f03)`,
}
export const info = {
	selector: unsafeCSS`[theme~="info"]`,
	color: unsafeCSS`var(--bs-info-color, #17a2b8)`,
	focusring: unsafeCSS`var(--bs-info-focusring-color, #17a2b850)`,
	hoverbg: unsafeCSS`var(--bs-info-hover-background-color, #138496)`,
	contrast: unsafeCSS`var(--bs-info-contrast-color, #fff)`,
	alertcolor: unsafeCSS`var(--bs-info-alert-color, #0c5460)`,
	alertbg: unsafeCSS`var(--bs-info-alert-background-color, #d1ecf1)`,
	alertborder: unsafeCSS`var(--bs-info-alert-border-color, #bee5eb)`,
	alertlinkcolor: unsafeCSS`var(--bs-info-alert-link-color, #062c33)`,
}
export const light = {
	selector: unsafeCSS`[theme~="light"]`,
	color: unsafeCSS`var(--bs-light-color, #f8f9fa)`,
	focusring: unsafeCSS`var(--bs-light-focusring-color, #f8f9fa50)`,
	hoverbg: unsafeCSS`var(--bs-light-hover-background-color, #e2e6ea)`,
	contrast: unsafeCSS`var(--bs-light-contrast-color, #212529)`,
	alertcolor: unsafeCSS`var(--bs-light-alert-color, #818182)`,
	alertbg: unsafeCSS`var(--bs-light-alert-background-color, #fefefe)`,
	alertborder: unsafeCSS`var(--bs-light-alert-border-color, #fdfdfe)`,
	alertlinkcolor: unsafeCSS`var(--bs-light-alert-link-color, #686868)`,
}
export const dark = {
	selector: unsafeCSS`[theme~="dark"]`,
	color: unsafeCSS`var(--bs-dark-color, #343a40)`,
	focusring: unsafeCSS`var(--bs-dark-focusring-color, #343a4050)`,
	hoverbg: unsafeCSS`var(--bs-dark-hover-background-color, #23272b)`,
	contrast: unsafeCSS`var(--bs-dark-contrast-color, #fff)`,
	alertcolor: unsafeCSS`var(--bs-dark-alert-color, #1b1e21)`,
	alertbg: unsafeCSS`var(--bs-dark-alert-background-color, #d6d8d9)`,
	alertborder: unsafeCSS`var(--bs-dark-alert-border-color, #c6c8ca)`,
	alertlinkcolor: unsafeCSS`var(--bs-dark-alert-link-color, #040505)`,
};

export default [
	primary,
	secondary,
	success,
	info,
	warning,
	danger,
	light,
	dark,
];
