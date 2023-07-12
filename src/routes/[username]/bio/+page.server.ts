import { adminAuth, adminDB } from '$lib/server/admin';
import { error, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {

    try {
        const userID = locals.userID;

        if (!userID) {
            throw redirect(302, `/login`);
        }

        const userDoc = await adminDB.collection('users').doc(userID!).get();
        const { username, bio } = userDoc.data()!;

        if (params.username !== username) {
            throw error(401, 'Unauthorized');
        }

        return {
            bio
        }
    } catch (e) {
        console.error(e)
        throw error(401, "Unauthorized");
    }
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default:async ({locals, request, params}) => {
        const uid = locals.userID;

        const data = await request.formData();
        const bio = data.get('bio');

        const userRef = adminDB.collection('users').doc(uid!);
        const { username } = (await userRef.get()).data()!;

        if (params.username !== username) {
            throw error(401, "Nop nop nop");
        }

        await userRef.update({
            bio
        })
    }
} satisfies Actions