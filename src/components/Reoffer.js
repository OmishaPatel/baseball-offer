import "../App.css";
import { Confeti } from "./Confeti";
import { Link } from "react-router-dom";
import { parse } from "node-html-parser";
import { useState, useEffect } from "react";
import { Loading } from "./Loading";
const url = "https://questionnaire-148920.appspot.com/swe/data.html";
export const Reoffer = () => {
  const [salaries, setSalaries] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, { mode: "cors" });
      const htmlData = await response.text();
      const data = JSON.stringify(htmlData);
      // parsing html data
      const parsed = parse(data);
      const tableRow = parsed.querySelectorAll("tr");
      // further parsing data to grab each row data
      const tableRowData = tableRow.map((item) =>
        item.childNodes.map((inner) => inner.rawText)
      );
      //grabbing salary
      const salary = tableRowData.map((item) => item[3]);
      //Regex to replace non int symbols, sort and get top 125
      const topSalary = salary
        .map((item) => parseInt(item.replace(/\D/g, "")))
        .sort()
        .filter((item) => !isNaN(item))
        .slice(0, 125);
      const avgSalary = topSalary.reduce((a, b) => a + b, 0) / 125;
      const avgTopSalary = avgSalary
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");
      setSalaries(avgTopSalary);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Confeti />

      <div className="reoffer">
        <header className="reofferheader">
          Congratulations you qualified for
        </header>
        <h3 className="homeTitle">$ {salaries}</h3>
        <Link to="/reoffer">
          <button className="reofferBtn" onClick={fetchData}>
            Re-offer
          </button>
        </Link>
      </div>

      <Link to="/">
        <button className="reofferHomeBtn">Home</button>
      </Link>
    </>
  );
};
