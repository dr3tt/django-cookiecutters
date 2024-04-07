/* eslint-disable */

const routes = {"core:home": "/", "core:user-account-name": "/account/name/", "core:user-account-change-password": "/account/change-password/", "core:user-account-shared-areas": "/account/shared-areas/", "core:user-account": "/account/", "core:data-update": "/data-update/", "core:edit": "/edit/", "core:errors-not-found": "/errors/not-found/", "core:errors-permission-denied": "/errors/permission-denied/", "core:settings-update-automatico": "/settings/update_automatico/", "core:settings-google-functions": "/settings/google-functions/", "core:settings-area-colors-item-details": "/settings/area-colors/<area_color_id>/items/<area_color_item_id>/", "core:settings-area-colors-item-create": "/settings/area-colors/<area_color_id>/items/", "core:settings-area-colors-details": "/settings/area-colors/<area_color_id>/", "core:settings-area-colors": "/settings/area-colors/", "core:settings": "/settings/", "core:login": "/login/", "core:logout": "/logout/", "core:reset-password": "/reset-password/<uidb64>/<token>/", "core:tasks-details": "/tasks/<task_name>/", "core:tasks": "/tasks/", "core:tasks-executions": "/tasks-executions/", "areas:index": "/areas/", "areas:edit": "/areas/<area_id>/edit/", "areas:details": "/areas/<area_id>/", "areas:move": "/areas/<area_id>/move/", "areas:folder-details": "/areas/folders/<folder_id>/", "areas:folder-map-edit": "/areas/folders/<folder_id>/map-edit/", "areas:search": "/areas/search/", "msam:apis-sales-managers": "/msam/apis/sales-managers/", "msam:apis-territories": "/msam/apis/territories/", "msam:apis-territory-assignment-by-activity-date": "/msam/apis/territories/assignments/search/", "msam:apis": "/msam/apis/", "msam:folders-zone-map": "/msam/sottozone/regions/<region_folder_id>/zones/<zone_folder_id>/map/", "msam:folders-sottozona-map": "/msam/sottozone/regions/<region_folder_id>/zones/<zone_folder_id>/<area_id>/map/", "msam:folders-sottozone": "/msam/sottozone/regions/<region_folder_id>/zones/<zone_folder_id>/", "msam:folders-zones": "/msam/sottozone/regions/<region_folder_id>/zones/", "msam:folders-regions": "/msam/sottozone/regions/", "msam:area-manager-sellers": "/msam/area-manager/sellers/", "msam:area-manager-sales-assignments-details": "/msam/area-manager/sales-assignments/<area_id>/", "msam:area-manager-sales-assignment-new-proposal-zone-choice": "/msam/area-manager/new-proposal/zone-choice/", "msam:area-manager-sales-assignment-new-proposal-zone-subzones": "/msam/area-manager/new-proposal/regions/<region_id>/zones/<zone_id>/", "msam:area-manager-sales-assignment-new-proposal-region-zones": "/msam/area-manager/new-proposal/regions/<region_id>/zones/", "msam:area-manager-sales-assignment-new-proposal-regions": "/msam/area-manager/new-proposal/regions/", "msam:area-manager-sales-assignment-new-proposal-sottozona-choice": "/msam/area-manager/new-proposal/zone/<zone_sf_id>/sottozona-choice/", "msam:area-manager-sales-assignment-new-proposal-add-remove-choice": "/msam/area-manager/sottozona/<area_id>/new-proposal/add-remove-choice/", "msam:area-manager-sales-assignment-new-proposal-add-seller": "/msam/area-manager/sottozona/<area_id>/new-proposal/add-seller/", "msam:area-manager-sales-assignment-new-proposal-remove-seller": "/msam/area-manager/sottozona/<area_id>/new-proposal/remove-seller/<seller_id>/", "msam:area-manager-sales-assignment-proposals": "/msam/area-manager/proposals/", "msam:region-manager-sales-assignment-proposal-evaluate": "/msam/region-manager/proposals/<proposal_id>/evaluate/", "msam:region-manager-sales-assignment-proposals": "/msam/region-manager/proposals/", "msam:sales-assignments-details": "/msam/sales-assignments/<area_id>/", "users:create": "/users/new/", "users:reset-password-link": "/users/<user_id>/reset-password-link/", "users:details": "/users/<user_id>/", "users:list": "/users/"};
const reverseUrl  = function(urlName) {
  var url = routes[urlName];
  if (!url) {
    throw "URL '" + urlName + "' was not found.";
  }

  const args = arguments;
  const argTokens = url.match(/<\w*>/g);
  if (!argTokens && args[1] !== undefined) {
    throw "Invalid URL lookup: URL '" + urlName + "' does not expect any arguments.";
  }

  if (typeof (args[1]) == 'object' && !Array.isArray(args[1])) {
    argTokens.forEach(function(token) {
      const argName = token.slice(1, -1);
      const argValue = args[1][argName];
      if (argValue === undefined) {
        throw "Invalid URL lookup: Argument '" + argName + "' was not provided.";
      }

      url = url.replace(token, argValue);
    });
  } else if (args[1] !== undefined) {
    const argsArray = Array.isArray(args[1]) ? args[1] : Array.prototype.slice.apply(args, [1, args.length]);
    if (argTokens.length !== argsArray.length) {
      throw "Invalid URL lookup: Wrong number of arguments ; expected " + argTokens.length + " arguments.";
    }

    argTokens.forEach(function(token, i) {
      const argValue = argsArray[i];
      url = url.replace(token, argValue);
    });
  }

  return url;
};


export default reverseUrl;
