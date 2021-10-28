import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Layout/Navbar";
import axios from "axios";
import Articles from "./Components/Display/Articles";

export class App extends Component {
  state = {
    select: false,
    id: "all",
    articles: [],
    loading: false,
    category: "general",
    country: "us",
  };
  async componentDidMount() {
    this.setState({ loading: true });
    console.log("Displaying the Top news");
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=e78c0c99ee7945aa93956c285ea209b8`
    );
    this.setState({ articles: res.data.articles });
    console.log(this.state.articles);
    this.setState({ select: true });
    this.setState({ loading: false });
  }

  disp = async (category, country) => {
    this.setState({ loading: true });
    console.log("Displaying the category " + category);

    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e78c0c99ee7945aa93956c285ea209b8`
    );

    console.log("URL returns  " + res.data.articles.length);

    this.setState({ articles: res.data.articles });
    this.setState({ select: true });
    this.setState({ loading: false });
    this.setState({ category: category });
    this.setState({ country: country });
  };

  render() {
    return (
      <div>
        <Navbar
          disp={this.disp}
          category={this.state.category}
          country={this.state.country}
        />
        {this.state.select === true && (
          <Articles
            articles={this.state.articles}
            loading={this.state.loading}
          />
        )}
      </div>
    );
  }
}

export default App;
