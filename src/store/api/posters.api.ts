import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPoster } from '~@types/poster.interface.ts';

const API_URL = import.meta.env.VITE_API_SRC;

export const postersApi = createApi({
	reducerPath: 'posters/api',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: build => ({
		getPosters: build.query<IPoster[], string>({
			query: (arg = '') => `/posters?${arg}`
		})
	})
});

export const { useGetPostersQuery } = postersApi;
