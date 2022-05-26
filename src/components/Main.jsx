import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import { useEffect, useState } from "react";

const Main = (props) => {
  const [people, setPeople] = useState(null);
  const url = "http://localhost:3000/people/";

  const getPeople = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPeople(data);
  }

  const createPeople = async (person) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    })
    getPeople();
  }

  useEffect(() => {getPeople()}, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Index people={people} createPeople={createPeople}/>} />
        <Route path="/people/:id" element={<Show people={people}/>} />
      </Routes>
    </main>
  )
}

export default Main;