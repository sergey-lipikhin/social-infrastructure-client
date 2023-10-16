import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { UniqueValueRenderer } from '@arcgis/core/renderers';
import { PictureMarkerSymbol } from '@arcgis/core/symbols';
import PopupTemplate from '@arcgis/core/PopupTemplate';

export function createPointsLayer(): FeatureLayer {
  const govermentSymbol = new PictureMarkerSymbol({
    url: 'https://nezlamnist.gov.ua/img/bs_icon.svg',
    width: '40px',
    height: '40px',
  });
  const businessSymbol = new PictureMarkerSymbol({
    url: 'https://nezlamnist.gov.ua/img/pn_icon.svg',
    width: '40px',
    height: '40px',
  });

  const template = new PopupTemplate({
    title: '{typeOfPoint}',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'typeOfPoint',
            label: 'Тип',
          },
          {
            fieldName: 'radius',
            label: 'Радіус обслуговування',
          },
          {
            fieldName: 'region',
            label: 'Регіон',
          },
          {
            fieldName: 'city',
            label: 'Місто',
          },
          {
            fieldName: 'street',
            label: 'Вулиця',
          },
        ],
      },
    ],
  });

  const renderer = new UniqueValueRenderer({
    legendOptions: {
      title: 'Route type',
    },
    defaultSymbol: govermentSymbol,
    defaultLabel: 'Other',
    field: 'typeOfPoint',
    uniqueValueInfos: [
      {
        value: 'goverment',
        symbol: govermentSymbol,
        label: 'Interstate',
      },
      {
        value: 'business',
        symbol: businessSymbol,
        label: 'US Highway',
      },
    ],
  });

  return new FeatureLayer({
    url: import.meta.env.VITE_POINTS_LAYER_URL,
    renderer,
    title: 'Пункт незламності',
    popupTemplate: template,
  });
}

export async function getPointsData(pointsLayer: FeatureLayer) {
  const query = pointsLayer.createQuery();

  query.where = '1=1';
  query.outFields = ['*'];

  const queryResults = await pointsLayer.queryFeatures(query);

  return queryResults.features.map(({ geometry, attributes }) => ({
    geometry,
    attributes,
  }));
}

export async function getRadiusById(
  pointsLayer: FeatureLayer,
  objectId: number,
) {
  const query = pointsLayer.createQuery();

  query.where = `OBJECTID = ${objectId}`;
  query.outFields = ['radius'];

  const queryResult = await pointsLayer.queryFeatures(query);

  // Ensure that a feature was found
  if (queryResult.features.length > 0) {
    const { radius } = queryResult.features[0].attributes;

    return radius;
  }

  return null;
}
