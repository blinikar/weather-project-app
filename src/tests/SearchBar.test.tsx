import renderer from 'react-test-renderer';
import { SearchBar } from "components/SearchBar/SearchBar";

test('renders correctly', () => {
    const tree = renderer
        .create(<SearchBar placeholder={"Search"}></SearchBar>)
        .toJSON()
    expect(tree).toMatchSnapshot();
});

