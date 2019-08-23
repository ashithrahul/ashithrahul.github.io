import * as validators from 'calidators';
import { useReducer, useEffect, useMemo } from 'react';

const initialState = {
  values: {},
  errors: {},
  submitted: false,
};

const validationReducer = (state, action) => {
  switch (action.type) {
    case 'change':
      const values = { ...state.values, ...action.payload };
      return {
        ...state,
        values,
      };
    case 'submit':
      return { ...state, submitted: true };
    case 'validate':
      return { ...state, errors: action.payload };
    default:
      throw new Error('Unknown action type');
  }
};


function validateField(fieldValue = '', fieldConfig) {
  for (const validatorName in fieldConfig.validation) {
    const validatorConfig = fieldConfig.validation[validatorName];
    const validator = validators[validatorName];
    const configuredValidator = validator(validatorConfig);
    const errorMessage = configuredValidator(fieldValue);

    if (errorMessage) {
      return errorMessage;
    }
  }
  return null;
}

function validateFields(fieldValues, fieldConfigs) {
  const errors = {};
  for (const fieldName in fieldConfigs) {
    const fieldConfig = fieldConfigs[fieldName];
    const fieldValue = fieldValues[fieldName];

    errors[fieldName] = validateField(fieldValue, fieldConfig);
  }
  return errors;
}


const isFormValid = (errors) => Object.values(errors).every((error) => error === null);

export const useValidation = (config) => {
  const [state, dispatch] = useReducer(validationReducer, initialState);
  useEffect(() => {
    const errors = validateFields(state.values, config.fields);
    dispatch({ type: 'validate', payload: errors });
  }, [state.values, config.fields]);

  return {
    submitted: state.submitted,
    errors: state.errors,
    getFormProps: () => ({
      onSubmit: (e) => {
        e.preventDefault();
        dispatch({ type: 'submit' });
        if (config.onSubmit) {
          config.onSubmit(state, isFormValid(state.errors));
        }
      },
    }),
    getFieldProps: (fieldName) => ({
      onChange: (e) => {
        if (!config.fields[fieldName]) {
          return;
        }
        dispatch({
          type: 'change',
          payload: { [fieldName]: e.target.value },
        });
      },
      name: fieldName,
      value: state.values[fieldName],
    }),
  };
};
