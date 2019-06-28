import PropTypes from 'prop-types';
import { isElement, isValidElementType } from 'react-is';

const propTypesFromJson = (json = {}) => Object.entries(json)
  .reduce((props, [name, value]) => {
    if (isElement(value)) {
      return { ...props, [name]: PropTypes.element };
    } if (isValidElementType(value)) {
      return { ...props, [name]: PropTypes.elementType };
    } if (typeof value === 'object' && Array.isArray(value)) {
      const typeDef = propTypesFromJson(value)[0];
      return { ...props, [name]: PropTypes.arrayOf(typeDef) };
    } if (typeof value === 'object' && value !== null) {
      const typeDef = propTypesFromJson(value);
      return { ...props, [name]: PropTypes.shape(typeDef) };
    }

    const primitiveTypes = {
      string: PropTypes.string,
      boolean: PropTypes.bool,
      function: PropTypes.func,
      number: PropTypes.number,
      symbol: PropTypes.symbol,
    };

    return { ...props, [name]: primitiveTypes[typeof value] || PropTypes.any };
  }, {});

export default propTypesFromJson;
