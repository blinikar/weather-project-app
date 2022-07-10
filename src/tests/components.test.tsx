import renderer from "react-test-renderer";
import { CurrentConditionsCard } from "components/CurrentConditionsCard";
import { City } from "models/City";
import { StarredCity } from "components/StarredCities/StarredCity/StarredCity";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { Provider } from "react-redux";
import store from "store";
import { StarredCities } from "components/StarredCities/StarredCities";
import { WelcomePage } from "pages/WelcomePage";
import { FeedbackPage } from "pages/FeedbackPage";
import { MapPage } from "pages/MapPage";
import { NoPage } from "pages/NoPage";

it("Starred city renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <StarredCity
          link="/innopolis"
          name="Innopolis"
          onRemoveClick={() => {
            console.log("bla bla");
          }}
        />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Current conditions card renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <CurrentConditionsCard
          type="Clear"
          temp={10}
          city={new City("Innopolis", "/innopolis")}
          date={new Date(2022, 1, 1)}
        />
        )
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Starred cities renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <StarredCities />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Welcome page renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <WelcomePage />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Feedback page renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <FeedbackPage />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Map page renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <MapPage />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Layout page renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("No page renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NoPage />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
