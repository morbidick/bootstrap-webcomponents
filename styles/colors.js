import {unsafeCss} from 'lit-element';

export const primary = {
	selector: unsafeCss`[theme~="primary"]`,
	color: unsafeCss`var(--bs-primary-color, #007bff)`,
	focusring: unsafeCss`var(--bs-primary-focusring-color, #007bff50)`,
	hoverbg: unsafeCss`var(--bs-primary-hover-background-color, #0069d9)`,
	contrast: unsafeCss`var(--bs-primary-contrast-color, #fff)`,
	alertcolor: unsafeCss`var(--bs-primary-alert-color, #004085)`,
	alertbg: unsafeCss`var(--bs-primary-alert-background-color, #cce5ff)`,
	alertborder: unsafeCss`var(--bs-primary-alert-border-color, #b8daff)`,
	alertlinkcolor: unsafeCss`var(--bs-primary-alert-link-color, #002752)`,

}
export const secondary = {
	selector: unsafeCss`[theme~="secondary"]`,
	color: unsafeCss`var(--bs-secondary-color, #6c757d)`,
	focusring: unsafeCss`var(--bs-secondary-focusring-color, #6c757d50)`,
	hoverbg: unsafeCss`var(--bs-secondary-hover-background-color, #5a6268)`,
	contrast: unsafeCss`var(--bs-secondary-contrast-color, #fff)`,
	alertcolor: unsafeCss`var(--bs-secondary-alert-color, #383d41)`,
	alertbg: unsafeCss`var(--bs-secondary-alert-background-color, #e2e3e5)`,
	alertborder: unsafeCss`var(--bs-secondary-alert-border-color, #d6d8db)`,
	alertlinkcolor: unsafeCss`var(--bs-secondary-alert-link-color, #202326)`,
}
export const success = {
	selector: unsafeCss`[theme~="success"]`,
	color: unsafeCss`var(--bs-success-color, #28a745)`,
	focusring: unsafeCss`var(--bs-success-focusring-color, #28a74550)`,
	hoverbg: unsafeCss`var(--bs-success-hover-background-color, #218838)`,
	contrast: unsafeCss`var(--bs-success-contrast-color, #fff)`,
	alertcolor: unsafeCss`var(--bs-success-alert-color, #155724)`,
	alertbg: unsafeCss`var(--bs-success-alert-background-color, #d4edda)`,
	alertborder: unsafeCss`var(--bs-success-alert-border-color, #c3e6cb)`,
	alertlinkcolor: unsafeCss`var(--bs-success-alert-link-color, #0b2e13)`,
}
export const danger = {
	selector: unsafeCss`[theme~="danger"]`,
	color: unsafeCss`var(--bs-danger-color, #dc3545)`,
	focusring: unsafeCss`var(--bs-danger-focusring-color, #dc354550)`,
	hoverbg: unsafeCss`var(--bs-danger-hover-background-color, #c82333)`,
	contrast: unsafeCss`var(--bs-danger-contrast-color, #fff)`,
	alertcolor: unsafeCss`var(--bs-danger-alert-color, #721c24)`,
	alertbg: unsafeCss`var(--bs-danger-alert-background-color, #f8d7da)`,
	alertborder: unsafeCss`var(--bs-danger-alert-border-color, #f5c6cb)`,
	alertlinkcolor: unsafeCss`var(--bs-danger-alert-link-color, #491217)`,
}
export const warning = {
	selector: unsafeCss`[theme~="warning"]`,
	color: unsafeCss`var(--bs-warning-color, #ffc107)`,
	focusring: unsafeCss`var(--bs-warning-focusring-color, #ffc10750)`,
	hoverbg: unsafeCss`var(--bs-warning-hover-background-color, #e0a800)`,
	contrast: unsafeCss`var(--bs-warning-contrast-color, #212529)`,
	alertcolor: unsafeCss`var(--bs-warning-alert-color, #856404)`,
	alertbg: unsafeCss`var(--bs-warning-alert-background-color, #fff3cd)`,
	alertborder: unsafeCss`var(--bs-warning-alert-border-color, #ffeeba)`,
	alertlinkcolor: unsafeCss`var(--bs-warning-alert-link-color, #533f03)`,
}
export const info = {
	selector: unsafeCss`[theme~="info"]`,
	color: unsafeCss`var(--bs-info-color, #17a2b8)`,
	focusring: unsafeCss`var(--bs-info-focusring-color, #17a2b850)`,
	hoverbg: unsafeCss`var(--bs-info-hover-background-color, #138496)`,
	contrast: unsafeCss`var(--bs-info-contrast-color, #fff)`,
	alertcolor: unsafeCss`var(--bs-info-alert-color, #0c5460)`,
	alertbg: unsafeCss`var(--bs-info-alert-background-color, #d1ecf1)`,
	alertborder: unsafeCss`var(--bs-info-alert-border-color, #bee5eb)`,
	alertlinkcolor: unsafeCss`var(--bs-info-alert-link-color, #062c33)`,
}
export const light = {
	selector: unsafeCss`[theme~="light"]`,
	color: unsafeCss`var(--bs-light-color, #f8f9fa)`,
	focusring: unsafeCss`var(--bs-light-focusring-color, #f8f9fa50)`,
	hoverbg: unsafeCss`var(--bs-light-hover-background-color, #e2e6ea)`,
	contrast: unsafeCss`var(--bs-light-contrast-color, #212529)`,
	alertcolor: unsafeCss`var(--bs-light-alert-color, #818182)`,
	alertbg: unsafeCss`var(--bs-light-alert-background-color, #fefefe)`,
	alertborder: unsafeCss`var(--bs-light-alert-border-color, #fdfdfe)`,
	alertlinkcolor: unsafeCss`var(--bs-light-alert-link-color, #686868)`,
}
export const dark = {
	selector: unsafeCss`[theme~="dark"]`,
	color: unsafeCss`var(--bs-dark-color, #343a40)`,
	focusring: unsafeCss`var(--bs-dark-focusring-color, #343a4050)`,
	hoverbg: unsafeCss`var(--bs-dark-hover-background-color, #23272b)`,
	contrast: unsafeCss`var(--bs-dark-contrast-color, #fff)`,
	alertcolor: unsafeCss`var(--bs-dark-alert-color, #1b1e21)`,
	alertbg: unsafeCss`var(--bs-dark-alert-background-color, #d6d8d9)`,
	alertborder: unsafeCss`var(--bs-dark-alert-border-color, #c6c8ca)`,
	alertlinkcolor: unsafeCss`var(--bs-dark-alert-link-color, #040505)`,
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
