import React from 'react';
import ReactDOM from 'react-dom';
import { Subscribe, Provider } from 'unstated';
import Counter from '@src/components/Counter';
import CounterState from '@src/state/CounterState';

const rootEl = document.getElementById('root');

const render = () =>
  ReactDOM.render(
    <Provider>
      <Subscribe to={[CounterState]}>
        {(counter: CounterState) => (
          <Counter
            value={counter.state.count}
            onIncrement={counter.increment}
            onDecrement={counter.decrement}
          />
        )}
      </Subscribe>
    </Provider>,
    rootEl
  );

render();
