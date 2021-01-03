import React from 'react';

import ProductItem from '../../components/product-item/product-item';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.testLoop.bind(this);
  }

  testLoop(): JSX.Element {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const li = arr.map((item) => <li key={item.toString()}>item</li>);
    return <ul>{li}</ul>;
  }

  render() {
    return this.testLoop();
  }
}
