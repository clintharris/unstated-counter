import React from 'react';
import { Subscribe, Container } from 'unstated';

import styles from '@src/App.scss';
import Counter from '@src/components/Counter';
import CounterState from '@src/state/CounterState';

export default class App extends React.Component {
  
  render() {
    return (
      <div className={styles.root}>
        <Subscribe to={[CounterState]}>
        {
          (counter: CounterState) => (
            <Counter value={counter.state.count} onIncrement={counter.increment} onDecrement={counter.decrement} />
          )
        }
        </Subscribe>
      </div>
    );
  }

  // renderChildren(counter: CounterState) {
  //   return <Counter value={counter.state.count} onIncrement={counter.increment} onDecrement={counter.decrement} />;
  // }
}