/*
 * Regex pattern for input validation:
 *    - Name: string with space
 *   - Password: minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character
 *   - Phone: matches the phone number in Finland
 */

const pattern = {
    name: new RegExp('^[A-Za-z ]+$'),
    password: new RegExp('^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'),
    phone: new RegExp(
        '^((04[0-9]{1})(s?|-?)|050(s?|-?)|0457(s?|-?)|[+]?358(s?|-?)50|0358(s?|-?)50|00358(s?|-?)50|[+]?358(s?|-?)4[0-9]{1}|0358(s?|-?)4[0-9]{1}|00358(s?|-?)4[0-9]{1})(s?|-?)(([0-9]{3,4})(s|-)?[0-9]{1,4})$',
    ),
};
export default pattern;
