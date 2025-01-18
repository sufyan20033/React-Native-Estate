// import { Account, Avatars, Client, OAuthProvider } from 'react-native-appwrite';
// import * as Linking from 'expo-linking';
// import { openAuthSessionAsync } from 'expo-web-browser';

// export const config = {
//     platform: 'com.jsm.realEstate',
//     endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
//     projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
// };

// export const client = new Client()
//     .setEndpoint(config.endpoint!)
//     .setProject(config.projectId!)
//     .setPlatform('react-native');

// export const avatar = new Avatars(client);
// export const account = new Account(client);

// export async function login() {
//     try {
//         const redirectUri = Linking.createURL('/');
//         const response = await account.createOAuth2Session(
//             OAuthProvider.Google,
//             redirectUri
//         );
        
//         const browserResult = await openAuthSessionAsync(
//             response.url,
//             redirectUri
//         );
        
//         if (browserResult.type !== 'success') {
//             throw new Error("Failed to login");
//         }
        
//         return true;
//     } catch (error) {
//         console.error(error);
//         return false;
//     }
// }

// export async function logout() {
//     try {
//         await account.deleteSession("current");
//         return true;
//     } catch (error) {
//         console.error(error);
//         return false;
//     }
// }

// export async function getCurrentUser() {
//     try {
//         const user = await account.get();
//         if (!user.$id) return null;
        
//         return {
//             ...user,
//             avatar: avatar.getInitials(user.name).toString()
//         };
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }

// const appwriteUtils = {
//     client,
//     account,
//     avatar,
//     login,
//     logout,
//     getCurrentUser
// };

// export default appwriteUtils;