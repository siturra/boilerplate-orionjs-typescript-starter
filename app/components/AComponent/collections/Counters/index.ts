import {createCollection} from '@orion-js/mongodb'
import Counter from 'app/components/AComponent/models/Counter'

export default createCollection<Counter>({
  name: 'test.counters',
  model: Counter,
  indexes: [
    {
      keys: {
        name: 1
      },
      options: {
        unique: true
      }
    }
  ]
})
