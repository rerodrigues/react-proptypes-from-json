# React PropTypes from JSON

> Auto generate React PropTypes from a JS Object

## Instalation

```bash
npm install @renatorodrigues/proptypes-from-json
```

## Reference

propTypesFromJson(`json = {}` _\<Object\>_)

Returns: `propTypes` _\<Object\>_

## Usage

```jsx
import propTypesFromJson from '@renatorodrigues/proptypes-from-json';

import MyComponent from './my-component';

const myProps = {
  "name": "The Rodrigues Family",
  "parents": [
    {
      "name": "Sergio",
      "age": 61
    },
    {
      "name": "Gislaine",
      "age": 59
    }
  ],
  "children": [
    {
      "name": "Renato",
      "age": 37
    },
    {
      "name": "Erika",
      "age": 34
    }
  ]
};

<MyComponent {...myProps} />

MyComponent.PropTypes = propTypesFromJson(myProps);
```

The props will be converted to:

```js
{
  name: PropTypes.string,
  parents: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string, age: PropTypes.number
    })
  ),
  children: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string, age: PropTypes.number
    })
  )
}
```

----

_2019 - Renato Rodrigues_
