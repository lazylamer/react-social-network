import {findRenderedComponentWithType} from "react-dom/test-utils";

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export const required = value => (value ?  undefined :  'field is required')

export const maxLengthCreator = maxLength => value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}
