export const APP_ROLES = {
    helpDesk: 'Help Desk',
    administrator: 'Administrator',
    fullControl: 'Full Control',
    download: 'Download',
    read: 'Read',
  };

  /* available to all roles */
export const ALL_ROLES_ELIGIBLE = [
    APP_ROLES.helpDesk,
    APP_ROLES.administrator,
    APP_ROLES.fullControl,
    APP_ROLES.download,
    APP_ROLES.read
];

/** roles eligible for viewing application  */
export const DIGITAL_ASSETS_APP_ELIGIBLE = [
    APP_ROLES.helpDesk,
    APP_ROLES.fullControl,
    APP_ROLES.download,
    APP_ROLES.read
];

export const MY_DOCUMENTS_ELIGIBLE = [
  APP_ROLES.administrator,
  APP_ROLES.fullControl,
  APP_ROLES.download,

];

/** roles eligible for user management type features */
export const USER_MANAGEMENT_ELIGIBLE = [
  APP_ROLES.helpDesk,
  APP_ROLES.administrator,
  APP_ROLES.fullControl,

];
