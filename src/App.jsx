import React, { useState, useEffect, useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { graphData, nedenVerileri } from "./data";
import "./App.css";

export default function App() {
  const [panelData, setPanelData] = useState(null);
  const graphRef = useRef();
  const imgRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = "me.jpg";
    img.onload = () => {
      imgRef.current = img;
    };
  }, []);

  const handleSelection = (id) => {
    switch (id) {
      case "zihin":
        setPanelData({ title: nedenVerileri.zihin.title, content: nedenVerileri.zihin.text });
        break;
      case "kitap":
      case "kitaplik":
        setPanelData({ title: nedenVerileri.kitap.title, content: nedenVerileri.kitap.text });
        break;
      case "film":
      case "dizi":
      case "koltuk":
        setPanelData({ title: nedenVerileri.film_dizi.title, content: nedenVerileri.film_dizi.text });
        break;
      case "muzik":
      case "yatak":
        setPanelData({ title: nedenVerileri.muzik.title, content: nedenVerileri.muzik.text });
        break;
      case "kod":
      case "calisma_masasi":
        setPanelData({ title: nedenVerileri.kod.title, content: nedenVerileri.kod.text });
        break;
      case "diy":
      case "tablolar":
        setPanelData({ title: nedenVerileri.diy.title, content: nedenVerileri.diy.text });
        break;
      default:
        const node = graphData.nodes.find((n) => n.id === id);
        if (node) {
          let extraInfo = "";
          if (node.author) extraInfo += `Yazar: ${node.author}\n`;
          if (node.artist) extraInfo += `Sanatçı: ${node.artist}\n`;
          if (node.date) extraInfo += `Çıkış Tarihi: ${node.date}\n`;
          
          setPanelData({
            title: node.label,
            content: `${extraInfo}${node.desc || ""}`
          });
        }
        break;
    }
  };

  const drawNode = (node, ctx, globalScale) => {
    const size = node.type === "root" ? 14 : node.type === "category" ? 9 : 6;
    let color = "#ff4d6d";
    if (node.type === "root") color = "#ff758f";
    if (node.type?.includes("item")) color = "#c77dff";

    if (node.type === "root" && imgRef.current) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
      ctx.clip();
      ctx.drawImage(imgRef.current, node.x - size, node.y - size, size * 2, size * 2);
      ctx.restore();
    } else {
      ctx.beginPath();
      ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
      ctx.fillStyle = color;
      ctx.fill();
    }

    const label = node.label;
    const fontSize = 12 / globalScale;
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(label, node.x, node.y + size + 2);
  };

  return (
    <div className="app-container">
      {/* KATMAN 1: En arkada sadece oda resmi duruyor */}
      <div className="room-bg-container">
        <img src="odam.jpg" alt="Dijital Odam" className="room-bg" />
      </div>

      {/* KATMAN 2: Ortada grafik katmanı duruyor */}
      <div className="graph-overlay">
        <ForceGraph2D
          ref={graphRef}
          graphData={graphData}
          nodeCanvasObject={drawNode}
          nodePointerAreaPaint={(node, color, ctx) => {
            const size = node.type === "root" ? 14 : node.type === "category" ? 9 : 6;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
            ctx.fill();
          }}
          onNodeClick={(node) => handleSelection(node.id)}
          linkColor={() => "rgba(255,255,255,0.2)"}
          width={window.innerWidth}
          height={window.innerHeight}
          backgroundColor="rgba(0,0,0,0)"
        />
      </div>

      {/* KATMAN 3: Tıklanabilir şeffaf/mavi alanlar EN ÜSTTE (Böylece kesinlikle tıklanır) */}
      <div className="clickable-areas-container">
        <div className="clickable-area yatak" onClick={() => handleSelection("yatak")} title="Yatak (Müzik)" />
        <div className="clickable-area masa" onClick={() => handleSelection("calisma_masasi")} title="Çalışma Masası (Kod)" />
        <div className="clickable-area kitaplik" onClick={() => handleSelection("kitaplik")} title="Kitaplık (Kitaplar)" />
        <div className="clickable-area tablolar" onClick={() => handleSelection("tablolar")} title="Duvar Resimleri (DIY)" />
        <div className="clickable-area koltuk" onClick={() => handleSelection("koltuk")} title="Koltuk (Dizi & Film)" />
      </div>

      {/* KATMAN 4: Şık Lacivert Detay Paneli */}
      {panelData && (
        <div className="info-panel">
          <button className="close-btn" onClick={() => setPanelData(null)}>×</button>
          <h2>{panelData.title}</h2>
          <hr />
          <p>{panelData.content}</p>
        </div>
      )}
    </div>
  );
}