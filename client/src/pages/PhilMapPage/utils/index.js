import axios from "axios";

function parsePPToVis(data) {
  let parsedNodes = [],
    parsedEdges = [];

  let mainContainer = [];

  data.forEach((theme, idx) => {
    let name = theme[0],
      id = parseInt(theme[1]),
      parents = theme[2].split(",").map((el) => parseInt(el)),
      primeParent = parseInt(theme[3]);
    let mainColor = false,
      mainSize = false;

    if (primeParent === 1) {
      mainContainer.push(theme);
      // mainColor = "#ccc";
      mainSize = 50;
    }

    parsedNodes.push({
      id: id,
      title: "none",
      label: name,
      size: mainSize || 18,
      color: mainColor || "#fff",
    });

    parents.forEach((par) => {
      parsedEdges.push({
        from: id,
        to: par === 1 ? undefined : par,
        primeParent: primeParent,
      });
    });
  });

  return { parsedNodes, parsedEdges };
}

export function getPP() {
  const key = "65bYvgX7lvNpObRF";
  const id = "784298";
  let targetUrl = `https://philpapers.org/philpapers/raw/categories.json?apiId=${id}&apiKey=${key}`;
  return axios
    .get(targetUrl)
    .then(({ data }) => {
      return parsePPToVis(data);
    })
    .catch((er) => {
      console.log("get PP error: ", er);
    });
}

export function getInPhoEntity() {
  return axios
    .get("https://www.inphoproject.org/entity.json")
    .then((res) => {
      const data = res.data.responseData.results,
        ideas = [],
        thinkers = [];

      data.forEach((el) => {
        if (el.type === "idea") {
          ideas.push(el);
        }
        if (el.type === "thinker") {
          thinkers.push(el);
        }
      });

      return { ideas, thinkers };
    })
    .catch((error) => {
      console.log("Catch error:", error);
    });
}
