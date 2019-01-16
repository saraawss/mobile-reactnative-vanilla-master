import axios from 'axios';
import { path } from '../default/config';

export const submitData = (data) => {

    let user = {
        firstname: data.firstname,
        lastname: data.lastname,
        dateOfBirth: '15-10-1984'
    };

	return new Promise((resolve, reject) => {

		axios.post(path.END_POINT, user)
            .then(response => {
            	resolve(response.data);
                return;
            })
            .catch(error => {
            	reject(error);
                return;
            });
    });

};