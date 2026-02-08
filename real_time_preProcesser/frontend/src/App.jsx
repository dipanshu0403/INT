import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import VirtualList from "./components/VirtualList";

const API = "http://localhost:5000/api/records";

function App() {
  const [records, setRecords] = useState([]);

  const fetchRecords = useCallback(async () => {
    const res = await axios.get(API);
    setRecords(res.data);
  }, []);

  useEffect(() => {
    fetchRecords();

    const interval = setInterval(async () => {
      await axios.post(API, {
        name: "Sensor-" + Math.floor(Math.random() * 100),
        value: Math.floor(Math.random() * 1000)
      });

      fetchRecords();
    }, 200);

    return () => clearInterval(interval);
  }, [fetchRecords]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Real-Time Data Dashboard</h2>
      <VirtualList records={records} />
    </div>
  );
}

export default App;
