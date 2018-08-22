export const primary = {
	selector: '[theme~="primary"]',
	color: "var(--bs-primary-color, #007bff)",
	focusring: "var(--bs-primary-focusring-color, #007bff50)",
	hoverbg: "var(--bs-primary-hover-background-color, #0069d9)",
	contrast: "var(--bs-primary-contrast-color, #fff)",
	alertcolor: "var(--bs-primary-alert-color, #004085)",
	alertbg: "var(--bs-primary-alert-background-color, #cce5ff)",
	alertborder:"var(--bs-primary-alert-border-color, #b8daff)",
	alertlinkcolor:"var(--bs-primary-alert-link-color, #002752)",

}
export const secondary = {
	selector: '[theme~="secondary"]',
	color: "var(--bs-secondary-color, #6c757d)",
	focusring: "var(--bs-secondary-focusring-color, #6c757d50)",
	hoverbg: "var(--bs-secondary-hover-background-color, #5a6268)",
	contrast: "var(--bs-secondary-contrast-color, #fff)",
	alertcolor: "var(--bs-secondary-alert-color, #383d41)",
	alertbg: "var(--bs-secondary-alert-background-color, #e2e3e5)",
	alertborder:"var(--bs-secondary-alert-border-color, #d6d8db)",
	alertlinkcolor:"var(--bs-secondary-alert-link-color, #202326)",
}
export const success = {
	selector: '[theme~="success"]',
	color: "var(--bs-success-color, #28a745)",
	focusring: "var(--bs-success-focusring-color, #28a74550)",
	hoverbg: "var(--bs-success-hover-background-color, #218838)",
	contrast: "var(--bs-success-contrast-color, #fff)",
	alertcolor: "var(--bs-success-alert-color, #155724)",
	alertbg: "var(--bs-success-alert-background-color, #d4edda)",
	alertborder:"var(--bs-success-alert-border-color, #c3e6cb)",
	alertlinkcolor:"var(--bs-success-alert-link-color, #0b2e13)",
}
export const danger = {
	selector: '[theme~="danger"]',
	color: "var(--bs-danger-color, #dc3545)",
	focusring: "var(--bs-danger-focusring-color, #dc354550)",
	hoverbg: "var(--bs-danger-hover-background-color, #c82333)",
	contrast: "var(--bs-danger-contrast-color, #fff)",
	alertcolor: "var(--bs-danger-alert-color, #721c24)",
	alertbg: "var(--bs-danger-alert-background-color, #f8d7da)",
	alertborder:"var(--bs-danger-alert-border-color, #f5c6cb)",
	alertlinkcolor:"var(--bs-danger-alert-link-color, #491217)",
}
export const warning = {
	selector: '[theme~="warning"]',
	color: "var(--bs-warning-color, #ffc107)",
	focusring: "var(--bs-warning-focusring-color, #ffc10750)",
	hoverbg: "var(--bs-warning-hover-background-color, #e0a800)",
	contrast: "var(--bs-warning-contrast-color, #212529)",
	alertcolor: "var(--bs-warning-alert-color, #856404)",
	alertbg: "var(--bs-warning-alert-background-color, #fff3cd)",
	alertborder:"var(--bs-warning-alert-border-color, #ffeeba)",
	alertlinkcolor:"var(--bs-warning-alert-link-color, #533f03)",
}
export const info = {
	selector: '[theme~="info"]',
	color: "var(--bs-info-color, #17a2b8)",
	focusring: "var(--bs-info-focusring-color, #17a2b850)",
	hoverbg: "var(--bs-info-hover-background-color, #138496)",
	contrast: "var(--bs-info-contrast-color, #fff)",
	alertcolor: "var(--bs-info-alert-color, #0c5460)",
	alertbg: "var(--bs-info-alert-background-color, #d1ecf1)",
	alertborder:"var(--bs-info-alert-border-color, #bee5eb)",
	alertlinkcolor:"var(--bs-info-alert-link-color, #062c33)",
}
export const light = {
	selector: '[theme~="light"]',
	color: "var(--bs-light-color, #f8f9fa)",
	focusring: "var(--bs-light-focusring-color, #f8f9fa50)",
	hoverbg: "var(--bs-light-hover-background-color, #e2e6ea)",
	contrast: "var(--bs-light-contrast-color, #212529)",
	alertcolor: "var(--bs-light-alert-color, #818182)",
	alertbg: "var(--bs-light-alert-background-color, #fefefe)",
	alertborder:"var(--bs-light-alert-border-color, #fdfdfe)",
	alertlinkcolor:"var(--bs-light-alert-link-color, #686868)",
}
export const dark = {
	selector: '[theme~="dark"]',
	color: "var(--bs-dark-color, #343a40)",
	focusring: "var(--bs-dark-focusring-color, #343a4050)",
	hoverbg: "var(--bs-dark-hover-background-color, #23272b)",
	contrast: "var(--bs-dark-contrast-color, #fff)",
	alertcolor: "var(--bs-dark-alert-color, #1b1e21)",
	alertbg: "var(--bs-dark-alert-background-color, #d6d8d9)",
	alertborder:"var(--bs-dark-alert-border-color, #c6c8ca)",
	alertlinkcolor:"var(--bs-dark-alert-link-color, #040505)",
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
