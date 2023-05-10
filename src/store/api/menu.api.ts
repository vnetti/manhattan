import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMenu } from '~@types/menu.interface.ts';

const API_URL = import.meta.env.VITE_API_SRC;

export const menuApi = createApi({
	reducerPath: 'menu/menu',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: build => ({
		getMenu: build.query<IMenu[], void>({
			query: () => '/menu'
		})
	})
});

export const { useGetMenuQuery } = menuApi;
