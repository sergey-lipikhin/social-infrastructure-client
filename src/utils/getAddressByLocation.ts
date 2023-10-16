import Point from '@arcgis/core/geometry/Point';
import * as locator from '@arcgis/core/rest/locator';

export async function getAddressByLocation(
  location: Point | __esri.ViewClickEvent,
) {
  const params = {
    location: location instanceof Point ? location : location.mapPoint,
  };

  try {
    const { attributes } = await locator.locationToAddress(
      import.meta.env.VITE_GEOCODE_SERVER_URL,
      params,
    );

    return {
      region: attributes?.Region ?? '',
      city: (attributes?.Neighborhood || attributes?.City) ?? '',
      street: (attributes?.Address || attributes?.City) ?? '',
    };
  } catch {
    return null;
  }
}
