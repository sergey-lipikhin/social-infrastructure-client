/* eslint-disable max-len */
import { AxiosError } from 'axios';
import { NotificationMessage } from '@cutomTypes/notification';
import { AppError, isApiError } from '../types/appError';

type Locale = 'en' | 'ua';

type DefaultErrors = {
  [key: string]: Record<Locale, string>;
};

const defaultErrors: DefaultErrors = {
  client: {
    en: 'Unfortunately, an unexpected error occurred. Please try again',
    ua: 'Нажаль винилка неочікувана помилка. Спробуйте ще раз',
  },
  network: {
    en: 'Network error. Please verify your internet connection and try again',
    ua: 'Виникла помилка мережі. Перевірте інтернет з\'єднання та спробуйте ще раз',
  },
  unexptected: {
    en: 'An error occurred. Please try again later',
    ua: 'Виникла помилка. Спробуйте ще раз пізніше',
  },
};

type GetMessage = (
  error: AppError,
  description?: string,
  locale?: Locale,
) => NotificationMessage;

const getMessage: GetMessage = (
  error,
  description,
  locale = 'ua',
) => {
  try {
    if (!isApiError(error)) {
      return { title: defaultErrors.clientError[locale], description };
    }

    if (error.code === AxiosError.ERR_NETWORK) {
      return { title: defaultErrors.network[locale], description };
    }

    return {
      title: error.response?.data?.message
        ?? defaultErrors.unexptected[locale],
      description,
    };
  } catch {
    return { title: defaultErrors.clientError[locale], description };
  }
};

export const apiErrorService = {
  getMessage,
};
