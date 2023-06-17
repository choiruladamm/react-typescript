import { useState } from "react";

import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

const App = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <div className="">
      <Heading title="Heading" />
      <Section>Lorem ipsum dolor sit amet.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["Read Webtoon", "Coding", "Coffee"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </div>
  );
};

export default App;
