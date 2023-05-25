import Head from "next/head";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";




import { header, footer, siteTitle, siteDescription } from "/config/default";
import Layout from "./Layout";

export default function Desideri() {
  return (
    <Layout>
      <CssBaseline />
      <div className="container">
        <div className="content">
          <div className="box box1">
            <div className="getInfo">
              <h4>Confidati con noi</h4>
              <h2>Esprimi un desiderio...</h2>
              <input type="text" required placeholder="Scrivi" />
              <br />
              <button type="submit">Invia</button>
              <br />
              
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
