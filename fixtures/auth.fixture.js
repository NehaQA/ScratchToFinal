import {test as base} from '@playwright/test';
import { loginAPI } from '../utils/apiUtils';   



export const test = base.extend ({

    loggedInPage : async ({page , request} , use) => {
        const token = await loginAPI(Request);
        await page.addInitScript((token) =>  {
            localStorage.setItem('token', token);
        },token);
        await page.goto('/'); 
    await use(page);
    },
});

export const expect = base.expect;