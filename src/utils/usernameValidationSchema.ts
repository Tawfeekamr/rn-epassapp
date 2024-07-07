import * as yup from 'yup';
import { IntlShape } from 'react-intl';

export const getUsernameValidationSchema = (intl: IntlShape): { [key: string]: any } => ({
    AE: yup.string().min(5).matches(/^[a-zA-Z0-9]*$/).required(intl.formatMessage({ id: 'username_required' })),
    IN: yup.string().min(6).matches(/^[a-zA-Z].*$/).required(intl.formatMessage({ id: 'username_required' })),
    US: yup.string().min(4).matches(/.*_.*/).required(intl.formatMessage({ id: 'username_required_underscore' })),
    JP: yup.string().min(3).matches(/.*-.*/).required(intl.formatMessage({ id: 'username_required_dash' })),
});
