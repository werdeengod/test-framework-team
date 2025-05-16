import type { AxiosResponse } from 'axios';
import type { AuthorType } from '@/types/models/AuthorType';
import type { LocationType } from '@/types/models/LocationType';
import type { PaintingType } from '@/types/models/PaintingType';

import axios from 'axios';
import { baseURL } from './consts';

interface Params {
  q: string | null
  _page: number | null
  _limit: number | null
}

export async function getPaintings(params: Params): Promise<PaintingType[]> {
  try {
    const response: AxiosResponse<PaintingType[]> = await axios({
      method: 'get',
      url: `${baseURL}/paintings`,
      params,
    });

    return response.data;
  }
  catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }

    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export async function getAuthors(): Promise<AuthorType[]> {
  try {
    const response: AxiosResponse<AuthorType[]> = await axios({
      method: 'get',
      url: `${baseURL}/authors`,
    });

    return response.data;
  }
  catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }

    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export async function getLocations(): Promise<LocationType[]> {
  try {
    const response: AxiosResponse<LocationType[]> = await axios({
      method: 'get',
      url: `${baseURL}/locations`,
    });

    return response.data;
  }
  catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }

    throw new Error(error instanceof Error ? error.message : String(error));
  }
}
