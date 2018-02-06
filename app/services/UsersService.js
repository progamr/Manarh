import axios from 'axios';
import { API_URL } from './../config/api';
import { API_ENDPOINTS } from './../config/api';
import {AsyncStorage} from 'react-native';
import {apiKeyActionCreators} from './../dataReducers/userApiKeyReducer';
import store from './../store';

/**
 * This class is responsible for handling all user
 * related operations
 */
export default class UsersService {


    /**
     * register the app of the user on Manarah API once
     * the app is installed and get an API token to use
     * it for authenticating the app in other api calls
     * @param firebaseId
     * @param permissionsGranted
     */
    static registerApp(firebaseId, permissionsGranted) {

        console.log('reg.....');

        // call the api passing the fb id and notifications granted flag
        return axios.post(API_URL + API_ENDPOINTS.registerApp,
                {
                    fb_id: firebaseId, granted: permissionsGranted
            }).then((response) => {
                console.log(response);
                // get the token from response and save it to Asyncstorage and redux
                let token = response.data.token;
                AsyncStorage.setItem('user@apiKey', token);
                store.dispatch(apiKeyActionCreators.getApiKey(token));

            }).catch((err) => {
            console.log(err.response);
        });
    }
}