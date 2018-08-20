
import { Container } from 'unstated';

interface ICounterState {
  count: number;
}

export default class CounterState extends Container<ICounterState> {
  state = {
    count: 0
  };

  increment = () => {
    this.setState((state) => ({ count: state.count + 1}));
    console.log('Count after increment:', this.state.count);
  }

  decrement = () => {
    this.setState((state) => ({ count: state.count - 1}));
    console.log('Count after decrement:', this.state.count);
  }
}